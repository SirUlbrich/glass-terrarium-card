import { HomeAssistant, EntityValue } from './glass-terrarium-card-types';

export function getEntityValue(hass?: HomeAssistant, entityId?: string): EntityValue {
  if (!entityId || !hass?.states[entityId]) {
    return { state: '--', unit: '' };
  }
  const stateObj = hass.states[entityId];
  return {
    state: stateObj.state,
    unit: stateObj.attributes?.unit_of_measurement || '',
  };
}

export function toggleEntity(hass?: HomeAssistant, entityId?: string): void {
  if (!entityId || !hass) return;
  const domain = entityId.split('.')[0];
  hass.callService(domain, 'toggle', { entity_id: entityId });
}

export function selectOption(hass?: HomeAssistant, entityId?: string, option?: string): void {
  if (!entityId || !option || !hass) return;
  hass.callService('input_select', 'select_option', {
      entity_id: entityId,
      option: option,
  });
}

export function setDatetime(hass?: HomeAssistant, entityId?: string, date?: string): void {
  if (!entityId || !date || !hass) return;
  hass.callService('input_datetime', 'set_datetime', {
      entity_id: entityId,
      date: date,
  });
}

export function isEntityOn(hass?: HomeAssistant, entityId?: string): boolean {
  if (!entityId ||!hass?.states[entityId]) return false;
  return hass.states[entityId].state === 'on';
}

export function getTimeAttr(hass?: HomeAssistant, entityId?: string, attrName?: string): string {
  if (!entityId || !attrName || !hass?.states[entityId]) return '--:--';
  return hass.states[entityId].attributes?.[attrName] || '--:--';
}
