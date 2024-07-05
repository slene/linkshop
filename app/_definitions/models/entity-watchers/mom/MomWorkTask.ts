import type { EntityWatchHandlerContext, EntityWatcher } from "@ruiapp/rapid-core";
import type { MomWorkTask } from "~/_definitions/meta/entity-types";

export default [
  {
    eventName: "entity.beforeCreate",
    modelSingularCode: "mom_work_task",
    handler: async (ctx: EntityWatchHandlerContext<"entity.beforeCreate">) => {
      const { server, payload } = ctx;
      let before = payload.before;

      const routeProcess = await server.getEntityManager("mom_route_process").findEntity({
        filters: [
          { operator: "eq", field: "id", value: before.routeProcess },
        ],
        properties: ["id", "process"]

      });

      if (routeProcess) {
        before.process_id = routeProcess?.process?.id
      }
    }
  },
] satisfies EntityWatcher<any>[];
