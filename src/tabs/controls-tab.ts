import { html } from 'lit';
import { HomeAssistant, TerrariumCardConfig } from '../glass-terrarium-card-types';
import { toggleEntity, isEntityOn } from '../glass-terrarium-card-helpers';


export function renderControlsTab(
	hass: HomeAssistant, 
	config: TerrariumCardConfig,
	onModeChange: (ev: Event) => void,
	onDateChange: (ev: Event) => void
) {

	const modeEntity = config.mode_select ? hass.states[config.mode_select] : undefined;
	const currentMode = modeEntity?.state;
	const modeOptions: string[] = modeEntity?.attributes?.options || [];

	const LightOn = isEntityOn(hass, config.light_main);
	const hid1On = isEntityOn(hass, config.hid1);
	const hid2On = isEntityOn(hass, config.hid2);

	const lightSperre = isEntityOn(hass, config.light_main_sperre);
	const hid1Sperre = isEntityOn(hass, config.hid1_sperre);
	const hid2Sperre = isEntityOn(hass, config.hid2_sperre);

	const dateEntity = config.winter_date ? hass.states[config.winter_date] : undefined;
	const currentDate = dateEntity?.state || '';
	

	return html`
		<!-- Schalter/Aktoren -->
		<div class="controls-layout">
			<div class="btn-stack">
				<div class="mode-title">Lampen</div>
				
				${config.light_main
					? html`<button class="btn" @click=${() => toggleEntity(hass, config?.light_main)}>
							<span>Licht</span>
							<span class="badge ${LightOn ? 'on' : ''}">${LightOn ? 'AN' : 'AUS'}</span>
						</button>`
					: ''}
				
					${config.hid1
					? html`<button class="btn" @click=${() => toggleEntity(hass, config?.hid1)}>
							<span>HID 1</span>
							<span class="badge ${hid1On ? 'on' : ''}">${hid1On ? 'AN' : 'AUS'}</span>
						</button>`
					: ''}
				
					${config.hid2
					? html`<button class="btn" @click=${() => toggleEntity(hass, config?.hid2)}>
							<span>HID 2</span>
							<span class="badge ${hid2On ? 'on' : ''}">${hid2On ? 'AN' : 'AUS'}</span>
						</button>`
					: ''}
			</div>

			
			<!-- Betriebsmodus -->	
			
			${config.mode_select
				? html`
					<div class="mode-section">
						<div class="mode-title">Betriebsmodus</div>
						<select
							class="mode-dropdown"
							.value=${currentMode || ''}
							@change=${onModeChange}
						>
							${modeOptions.map(
								(opt) => html`
									<option value=${opt} ?selected=${currentMode === opt}>
										${opt}
									</option>
								`
							)}
						</select>
						
						${config.winter_date && currentMode?.toLowerCase() === 'einwinterung'
							? html`
								<div class="date-picker-wrapper">
									<label class="date-label">Start Datum</label>
									<input
										type="date"
										class="date-input"
										.value=${currentDate}
										@change=${onDateChange}
									/>
								</div>
							`
							: ''}
					</div>
				`
			: ''}
		</div>
		${config.light_main_sperre || config.hid1_sperre || config.hid2_sperre 
			? html`
			<div class="btn-stack-2">
				<div class="mode-title">Zeiten ignorieren</div>
				
				${config.light_main_sperre
					? html`<button class="btn" @click=${() => toggleEntity(hass, config?.light_main_sperre)}>
							<span>Licht</span>
							<span class="badge ${lightSperre ? 'on' : ''}">${lightSperre ? 'AN' : 'AUS'}</span>
						</button>`
					: ''}
				
					${config.hid1_sperre
					? html`<button class="btn" @click=${() => toggleEntity(hass, config?.hid1_sperre)}>
							<span>HID 1</span>
							<span class="badge ${hid1Sperre ? 'on' : ''}">${hid1Sperre ? 'AN' : 'AUS'}</span>
						</button>`
					: ''}
				
					${config.hid2_sperre
					? html`<button class="btn" @click=${() => toggleEntity(hass, config?.hid2_sperre)}>
							<span>HID 2</span>
							<span class="badge ${hid2Sperre ? 'on' : ''}">${hid2Sperre ? 'AN' : 'AUS'}</span>
						</button>`
					: ''}
			</div>`
		: ''}
	`;
}