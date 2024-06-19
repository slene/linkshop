import type { SimpleRockConfig } from "@ruiapp/move-style";
import { RapidTableActionConfig } from "@ruiapp/rapid-extension";

export interface SplitBinNumActionRockConfig extends SimpleRockConfig, RapidTableActionConfig {
  dataSourceAdapter?: string | ((...args: any[]) => any);
  printerCode?: string;
  printTemplateCode?: string;
}
