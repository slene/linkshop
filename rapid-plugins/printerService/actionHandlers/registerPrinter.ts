import type { ActionHandlerContext } from "@ruiapp/rapid-core";
import type PrinterPlugin from "../PrinterPlugin";
import { RegisterPrinterInput } from "../PrinterPluginTypes";

export const code = "registerPrinter";

export type RegisterPrinterActionHandlerConfig = {
}

export async function handler(
  plugin: PrinterPlugin,
  ctx: ActionHandlerContext,
  config: RegisterPrinterActionHandlerConfig,
) {
  const input: RegisterPrinterInput = ctx.input;

  await plugin.printerService.registerPrinter(input);

  ctx.output = {
  };
}
