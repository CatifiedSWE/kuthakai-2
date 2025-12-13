// Settings module types

export interface SettingItemConfig {
  id: string;
  icon: string;
  label: string;
  href: string;
}

export interface SettingToggleConfig {
  id: string;
  icon: string;
  label: string;
  defaultEnabled?: boolean;
}

export interface SettingSectionConfig {
  title: string;
  items: (SettingItemConfig | SettingToggleConfig)[];
}

export type SettingType = 'navigation' | 'toggle';
