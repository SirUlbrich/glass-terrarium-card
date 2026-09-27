import { html } from 'lit';
import { HomeAssistant, TerrariumCardConfig } from '../glass-terrarium-card-types';
import { getEntityValue, isEntityOn } from '../glass-terrarium-card-helpers';

export function renderOverviewTab(hass: HomeAssistant, config: TerrariumCardConfig) {
  const sun1 = getEntityValue(hass, config.temp_sun_1);
  const sun2 = getEntityValue(hass, config.temp_sun_2);
  const env1 = getEntityValue(hass, config.temp_env_1);
  const env2 = getEntityValue(hass, config.temp_env_2);
  const env3 = getEntityValue(hass, config.temp_env_3);
  const hum = getEntityValue(hass, config.humidity);

  const LightOn = isEntityOn(hass, config.light_main);
  const hid1On = isEntityOn(hass, config.hid1);
  const hid2On = isEntityOn(hass, config.hid2);



  return html`
    <!-- Sonnenplätze -->
    <div class="grid-sun">
    ${config.temp_sun_1
      ? html`
        <div class="sun-box">
          <div class="sun-title">Sonnenplatz 1</div>
          <div class="sun-value">${sun1.state}${sun1.unit || '°C'}</div>
        </div>`
      : ''}
    ${config.temp_sun_2
      ? html`
      <div class="sun-box">
        <div class="sun-title">Sonnenplatz 2</div>
        <div class="sun-value">${sun2.state}${sun2.unit || '°C'}</div>
      </div>`
      : ''}
    </div>
    <div class="zones-list">
      <div class="zone-row">
        ${config.temp_env_1 ? html`
        <div class="zone-item">
          <span class="zone-label">Zone 1</span>
          <span class="zone-value">${env1.state}${env1.unit || '°C'}</span>
        </div>`
        : ''}
        ${config.temp_env_2 ? html`
        <div class="zone-item">
          <span class="zone-label">Zone 2</span>
          <span class="zone-value">${env2.state}${env2.unit || '°C'}</span>
        </div>`
        : ''}
        ${config.temp_env_3 ? html`
        <div class="zone-item">
          <span class="zone-label">Zone 3</span>
          <span class="zone-value">${env3.state}${env3.unit || '°C'}</span>
        </div>`
        : '' }
      </div>
    </div>

    <div class="combined-box">
      ${config.humidity ? html`
      <div>
        <div class="sub-title">Luftfeuchtigkeit</div>
        <div class="sub-value">${hum.state}${hum.unit || '%'}</div>
      </div>`
      : '' }
      <div class="box-divider"></div>
      <div>
        <div class="sub-title">Lampen</div>
        <div class="item-box">
          ${config.light_main ? html`
          <div class="box-item">
            <span class="item-label">Licht:</span>
            <span class="sub-value orange">${LightOn ? 'AN' : 'AUS'}</span>
          </div>`
          : '' }
          ${config.hid1 ? html`
          <div class="box-item">
            <span class="item-label">HID 1:</span>
            <span class="sub-value orange">${hid1On ? 'AN' : 'AUS'}</span>
          </div>`
          : '' }
          ${config.hid2 ? html`
          <div class="box-item">
            <span class="item-label">HID 2:</span>
            <span class="sub-value orange">${hid2On ? 'AN' : 'AUS'}</span>
          </div>`
          : '' }
        </div>
      </div>
    </div>
  `;
}