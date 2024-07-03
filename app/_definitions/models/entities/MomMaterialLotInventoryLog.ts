import type { TDictionaryCodes } from "../../meta/data-dictionary-codes";
import type { TEntitySingularCodes } from "../../meta/model-codes";
import type { RapidEntity } from "@ruiapp/rapid-extension";

const entity: RapidEntity<TEntitySingularCodes, TDictionaryCodes> = {
  namespace: "mom",
  code: "MomMaterialLotInventoryLog",
  name: "库存量变更记录-按物品、批次分组",
  fields: [
    {
      code: "balanceRecord",
      name: "库存量",
      type: "relation",
      targetSingularCode: "mom_material_lot_inventory_balance",
      targetIdColumnName: "balance_record_id",
    },
    {
      code: "material",
      name: "物品",
      type: "relation",
      targetSingularCode: "base_material",
      targetIdColumnName: "material_id",
    },
    {
      code: "tags",
      name: "标签",
      type: "text",
    },
    {
      code: "lotNum",
      name: "批号",
      type: "text",
    },
    {
      code: "unit",
      name: "单位",
      type: "relation",
      targetSingularCode: "base_unit",
      targetIdColumnName: "unit_id",
    },
    {
      code: "onHandQuantity",
      name: "在库数量",
      description: "在仓库中的数量，包括已被预订或分配的数量。",
      type: "double",
    },
    {
      code: "onHandQuantityChange",
      name: "在库数量变化",
      type: "double",
    },
  ],
};

export default entity;
