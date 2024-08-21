import type { TDictionaryCodes } from "../../meta/data-dictionary-codes";
import type { TEntitySingularCodes } from "../../meta/model-codes";
import type { RapidEntity } from "@ruiapp/rapid-extension";

const entity: RapidEntity<TEntitySingularCodes, TDictionaryCodes> = {
  metaOnly: true,
  namespace: "sys",
  code: "SysAuditLog",
  name: "系统操作",
  tableName: "sys_audit_logs",
  fields: [
    {
      code: "user",
      name: "操作人",
      type: "relation",
      targetSingularCode: "oc_user",
      targetIdColumnName: "user_id",
    },
    {
      code: "targetSingularCode",
      name: "操作对象",
      type: "option",
      dataDictionary: "SysAuditLogTarget",
    },
    {
      code: "targetSingularName",
      name: "操作对象名称",
      type: "text",
    },
    {
      code: "method",
      name: "操作方法",
      type: "option",
      dataDictionary: "SysAuditLogMethod",
    },
    {
      code: "changes",
      name: "变更记录",
      type: "json",
    },
  ],
};

export default entity;
