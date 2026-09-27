export interface HomeAssistant {
  states: Record<string, any>;
  callService: (domain: string, service: string, serviceData?: object) => Promise<void>;
}

export interface TerrariumCardConfig {
  type: string;
  title?: string;
  bg_image?: string;
  temp_sun_1: string;
  temp_sun_2?: string;
  temp_env_1?: string;
  temp_env_2?: string;
  temp_env_3?: string;
  humidity?: string;
  mode_select?: string;
  winter_date?: string;
  light_main?: string;
  hid1?: string;
  hid2?: string;
  light_main_time?: string;
  hid1_time?: string;
  hid2_time?: string;
  light_main_sperre?: string;
  hid1_sperre?: string;
  hid2_sperre?: string;
}

export interface EntityValue {
  state: string;
  unit: string;
}