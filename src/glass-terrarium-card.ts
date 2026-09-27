import { LitElement, html, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, TerrariumCardConfig, EntityValue } from './glass-terrarium-card-types';
import { cardStyles } from './styles';
import './glass-terrarium-card-editor';
import { selectOption, setDatetime } from './glass-terrarium-card-helpers';
import { renderOverviewTab, renderControlsTab, renderTimesTab } from './tabs';

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'glass-terrarium-card',
  name: 'Glass Terrarium Card (Mockup Style)',
  description: 'Glass Card für Terrarien',
});

@customElement('glass-terrarium-card')
export class GlassTerrariumCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: TerrariumCardConfig;
  @state() private _activeTab: string='overview';
  
  static get styles(): CSSResultGroup {
    return cardStyles;
  }
  public static async getConfigElement() {
    return document.createElement('glass-terrarium-card-editor');
  }

  public static getStubConfig(): Partial<TerrariumCardConfig> {
    return { title: 'Wüstenterrarium' };
  }

  public setConfig(config: TerrariumCardConfig): void {
    if (!config) throw new Error('Ungültige Konfiguration!');
    this._config = config;
  }

  private _handleModeChange(ev: Event): void {
    const target = ev.target as HTMLSelectElement;
    selectOption(this.hass, this._config?.mode_select, target.value);
  }

  private _handleDateChange(ev: Event): void {
    const target = ev.target as HTMLInputElement;
    setDatetime(this.hass, this._config?.winter_date, target.value);
  }
  
  private _setTab(tab: string): void {
    this._activeTab = tab;
  }

  protected render() {
    if (!this.hass || !this._config) return html``;

    const bgStyle = this._config.bg_image 
      ? `background-image: url('${this._config.bg_image}'); background-size: cover; background-position: center;` 
      : '';

    return html`
      <ha-card style=${bgStyle}>
        <div class="header">
          <span>${this._config.title || 'Terrarium'}</span>
        </div>
        <div class="tab-content">
          ${this._activeTab === 'overview' ? renderOverviewTab(this.hass, this._config) : ''}
          ${this._activeTab === 'controls' ? renderControlsTab(this.hass, this._config, this._handleModeChange, this._handleDateChange) : ''}
          ${this._activeTab === 'times' ? renderTimesTab(this.hass, this._config) : ''}
        </div>
        <!-- Bottom Navigation Bar -->
        <div class="tab-bar">
          <button class="tab-btn ${this._activeTab === 'overview' ? 'active' : ''}" @click=${() => this._setTab('overview')}>
            <ha-icon icon="mdi:home-thermometer-outline"></ha-icon>
            <span>Übersicht</span>
          </button>

          <button class="tab-btn ${this._activeTab === 'controls' ? 'active' : ''}" @click=${() => this._setTab('controls')}>
            <ha-icon icon="mdi:tune"></ha-icon>
            <span>Steuerung</span>
          </button>

          <button class="tab-btn ${this._activeTab === 'times' ? 'active' : ''}" @click=${() => this._setTab('times')}>
            <ha-icon icon="mdi:clock-outline"></ha-icon>
            <span>Zeiten</span>
          </button>
      </ha-card>
    `;
  }


}