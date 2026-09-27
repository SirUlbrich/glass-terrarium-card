import { CSSResultGroup } from 'lit';
import { baseStyles } from './base-styles';
import { overviewTabStyles } from './overview-tab-styles';
import { controlsTabStyles } from './controls-tab-styles';
import { timesTabStyles } from './times-tab-styles';

// 1. Kombiniertes Array für die Haupt-Card exportieren
export const cardStyles: CSSResultGroup = [
  baseStyles,
  overviewTabStyles,
  controlsTabStyles,
  timesTabStyles,
];

// 2. Einzelne Styles reexportieren (falls ein Tab sie separat benötigt oder für den Editor)
export * from './base-styles';
export * from './overview-tab-styles';
export * from './controls-tab-styles';
export * from './times-tab-styles';
export * from './editor-styles';