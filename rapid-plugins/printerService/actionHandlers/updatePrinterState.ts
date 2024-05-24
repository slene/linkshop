import type { ActionHandlerContext } from "@ruiapp/rapid-core";
import type PrinterPlugin from "../PrinterPlugin";
import type { UpdatePrinterStateInput } from "../PrinterPluginTypes";

export const code = "updatePrinterState";

export type UpdatePrinterStateActionHandlerConfig = {
}

export async function handler(
  plugin: PrinterPlugin,
  ctx: ActionHandlerContext,
  config: UpdatePrinterStateActionHandlerConfig,
) {
  const input: UpdatePrinterStateInput = ctx.input;

  await plugin.printerService.updatePrinterState(input);

  ctx.output = {};
}
