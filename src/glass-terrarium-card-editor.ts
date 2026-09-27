import { LitElement, html, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, TerrariumCardConfig } from './glass-terrarium-card-types';
import { editorStyles } from './styles';

@customElement('glass-terrarium-card-editor')
export class GlassTerrariumCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: TerrariumCardConfig;

  public setConfig(config: TerrariumCardConfig): void {
    this._config = config;
  }

  static get styles(): CSSResultGroup {
    return editorStyles;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) return;
    const target = ev.target as any;
    const configValue = target.configValue;
    const value = target.value;

    if (configValue && this._config[configValue as keyof TerrariumCardConfig] !== value) {
      this._config = {
        ...this._config,
        [configValue]: value,
      };
      
      const event = new CustomEvent('config-changed', {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }
  }

  protected render() {
    if (!this.hass || !this._config) return html``;

    return html`
      <div class="card-config">
        <ha-textfield
          label="Titel"
          .value=${this._config.title || ''}
          .configValue=${'title'}
          @input=${this._valueChanged}
        ></ha-textfield>

        <h3>Sonnenplätze</h3>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.temp_sun_1 || ''}
          .configValue=${'temp_sun_1'}
          .label=${'Sonnenplatz 1 Temperatur'}
          .includeDomains=${['sensor']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.temp_sun_2 || ''}
          .configValue=${'temp_sun_2'}
          .label=${'Sonnenplatz 2 Temperatur'}
          .includeDomains=${['sensor']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <h3>Umgebung</h3>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.temp_env_1 || ''}
          .configValue=${'temp_env_1'}
          .label=${'Umgebungstemperatur Zone 1'}
          .includeDomains=${['sensor']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.temp_env_2 || ''}
          .configValue=${'temp_env_2'}
          .label=${'Umgebungstemperatur Zone 2'}
          .includeDomains=${['sensor']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.temp_env_3 || ''}
          .configValue=${'temp_env_3'}
          .label=${'Umgebungstemperatur Zone 3'}
          .includeDomains=${['sensor']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.humidity || ''}
          .configValue=${'humidity'}
          .label=${'Luftfeuchtigkeit'}
          .includeDomains=${['sensor']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <h3>Schalter & Aktoren</h3>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.light_main || ''}
          .configValue=${'light_main'}
          .label=${'Grundbeleuchtung (Optional)'}
          .includeDomains=${['switch', 'light']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid1 || ''}
          .configValue=${'hid1'}
          .label=${'UV-Beleuchtung (Optional)'}
          .includeDomains=${['switch', 'light']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid2 || ''}
          .configValue=${'hid2'}
          .label=${'Lüfter (Optional)'}
          .includeDomains=${['switch', 'light']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.light_main_sperre || ''}
          .configValue=${'light_main_sperre'}
          .label=${'Grundbel. Dauer-An (Optional)'}
          .includeDomains=${['switch', 'input_boolean']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid1_sperre || ''}
          .configValue=${'hid1_sperre'}
          .label=${'HID 1 Dauer-An (Optional)'}
          .includeDomains=${['switch', 'input_boolean']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid2_sperre || ''}
          .configValue=${'hid2_sperre'}
          .label=${'HID 2 Dauer-An (Optional)'}
          .includeDomains=${['switch', 'input_boolean']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <h3>Steuerung & Modus</h3>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.mode_select || ''}
          .configValue=${'mode_select'}
          .label=${'Betriebsmodus (input_select)'}
          .includeDomains=${['input_select']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>
        
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.winter_date || ''}
          .configValue=${'winter_date'}
          .label=${'Beginn Einwinterung (input_datetime)'}
          .includeDomains=${['input_datetime']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.light_main_time || ''}
          .configValue=${'light_main_time'}
          .label=${'Grundbeleuchtung Zeiten-Entität (Optional)'}
          .includeDomains=${['binary_sensor', 'sensor']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid1_time || ''}
          .configValue=${'hid1_time'}
          .label=${'HID 1 Zeiten-Entität (Optional)'}
          .includeDomains=${['binary_sensor', 'sensor']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.hid2_time || ''}
          .configValue=${'hid2_time'}
          .label=${'HID 2 Zeiten-Entität (Optional)'}
          .includeDomains=${['binary_sensor', 'sensor']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>
      </div>
    `;
  }
}