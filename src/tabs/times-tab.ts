import { html } from 'lit';
import { HomeAssistant, TerrariumCardConfig } from '../glass-terrarium-card-types';
import { getTimeAttr } from '../glass-terrarium-card-helpers';

export function renderTimesTab(
  hass: HomeAssistant,
  config: TerrariumCardConfig
) {


  const lightOn = getTimeAttr(hass, config.light_main_time, 'einschalten_uhr') || '--:--';
  const lightOff = getTimeAttr(hass, config.light_main_time, 'ausschalten_uhr') || '--:--';

  const hid1On = getTimeAttr(hass, config.hid1_time, 'einschalten_uhr') || '--:--';
  const hid1Off = getTimeAttr(hass, config.hid1_time, 'ausschalten_uhr') || '--:--';

  const hid2On = getTimeAttr(hass, config.hid2_time, 'einschalten_uhr') || '--:--';
  const hid2Off = getTimeAttr(hass, config.hid2_time, 'ausschalten_uhr') || '--:--';

  const dauerEntity = getTimeAttr(hass, config.light_main_time, 'leuchtdauer') || '--:--';
  const dateEntity = getTimeAttr(hass, config.light_main_time, 'zieldatum') || '--.--.----';
  const restEntity = getTimeAttr(hass, config.light_main_time, 'verbleibende_tage') || '--';
  const modeEntity = config.mode_select ? hass.states[config.mode_select] : undefined;
  const currentMode = modeEntity?.state;

  return html`
    <div class="times-section">
      <div class="time-row">
        <span class="time-label">Hauptlicht: </span>
        <span class="time-item">
          <span class="time-val">EIN: ${lightOn} | AUS: ${lightOff}</span>
        </span>
        </div>
      <div class="time-row">
        <span class="time-label">HID 1: </span>
        <span class="time-item">
          <span class="time-val">EIN: ${hid1On} | AUS: ${hid1Off}</span>
        </span>
      </div>
      <div class="time-row">
        <span class="time-label">HID 2: </span>
        <span class="time-item">
          <span class="time-val">EIN: ${hid2On} | AUS: ${hid2Off}</span>
        </span>
      </div>
      <div class="time-row">
        <span class="time-label">Leuchtdauer: </span>
        <span class="time-item">
          <span class="time-val">${dauerEntity}</span>
          <span class="time-label">Std</span>
        </span>
      </div>
      ${config.winter_date && currentMode?.toLowerCase() === 'einwinterung'
							? html`
                <div class="time-row">
                  <span class="time-label">Einwinterung am: </span>
                  <span class="time-item">
                    <span class="time-val">${dateEntity}</span>
                  </span>
                </div>
                <div class="time-row">
                  <span class="time-label">verbl. Tage: </span>
                  <span class="time-item">
                    <span class="time-val">${restEntity}</span>
                    <span class="time-label">${Number(restEntity) === 1 ? 'Tag' : 'Tage'}</span>
                  </span>
                  </div>
              ` : ''
      }
    </div>
  `;
}