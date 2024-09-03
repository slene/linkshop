export const entitySingularCodes = [
  'app_client',
  'app_nav_item',
  'ecm_document',
  'ecm_revision',
  'ecm_storage_object',
  'data_dictionary',
  'data_dictionary_entry',
  'model',
  'property',
  'route',
  'oc_department',
  'oc_role',
  'oc_user',
  'system_setting_group_setting',
  'system_setting_item',
  'system_setting_item_setting',
  'shopfloor_app',
  'shopfloor_app_step',
  'shopfloor_app_version',
  'shopfloor_display_device',
  'shopfloor_station',
  'sys_action',
  'sys_action_group',
  'webhook',
  'notification',
] as const;
export type TEntitySingularCodes = typeof entitySingularCodes[number];

const entityFieldCodes = {
  'AppClient': [
    'id',
    'code',
    'name',
    'config',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'AppNavItem': [
    'id',
    'code',
    'name',
    'client',
    'parent',
    'orderNum',
    'icon',
    'pageCode',
    'config',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'EcmDocument': [
    'id',
    'type',
    'code',
    'name',
    'extName',
    'title',
    'size',
    'lastRevision',
    'storageObject',
    'ref',
    'parent',
    'ancestorIdPath',
    'publishState',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'EcmRevision': [
    'id',
    'document',
    'size',
    'storageObject',
    'publishState',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'EcmStorageObject': [
    'id',
    'size',
    'key',
    'hash',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'DataDictionary': [
    'id',
    'code',
    'name',
    'valueType',
    'level',
    'description',
    'source',
    'externalId',
    'externalData',
    'state',
    'entries',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'DataDictionaryEntry': [
    'id',
    'dictionary',
    'value',
    'name',
    'color',
    'icon',
    'description',
    'disabled',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'Model': [
    'id',
    'namespace',
    'name',
    'description',
    'singularCode',
    'pluralCode',
    'permissionPolicies',
    'properties',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'Property': [
    'id',
    'model',
    'type',
    'name',
    'code',
    'description',
    'columnName',
    'required',
    'defaultValue',
    'config',
    'autoIncrement',
    'minLength',
    'maxLength',
    'relation',
    'targetSingularCode',
    'targetIdColumnName',
    'selfIdColumnName',
    'linkSchema',
    'linkTableName',
    'dataDictionary',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'Route': [
    'id',
    'namespace',
    'code',
    'name',
    'description',
    'type',
    'method',
    'endpoint',
    'actions',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'OcDepartment': [
    'id',
    'parent',
    'code',
    'name',
    'orderNum',
    'users',
    'externalCode',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'OcRole': [
    'id',
    'code',
    'name',
    'description',
    'orderNum',
    'state',
    'users',
    'actions',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'OcUser': [
    'id',
    'name',
    'login',
    'password',
    'hidden',
    'state',
    'email',
    'department',
    'roles',
    'externalCode',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'SystemSettingGroupSetting': [
    'id',
    'code',
    'name',
    'description',
    'permissionAssignments',
    'items',
    'details',
    'user',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'SystemSettingItem': [
    'id',
    'groupCode',
    'itemCode',
    'value',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'SystemSettingItemSetting': [
    'id',
    'group',
    'orderNum',
    'type',
    'code',
    'name',
    'description',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'ShopfloorApp': [
    'id',
    'code',
    'name',
    'description',
    'icon',
    'version',
    'permissions',
    'content',
    'publishedAt',
    'publishedBy',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'ShopfloorAppStep': [
    'id',
    'app',
    'code',
    'name',
    'kind',
    'orderNum',
    'triggers',
    'schema',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'ShopfloorAppVersion': [
    'id',
    'app',
    'version',
    'description',
    'content',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'ShopfloorDisplayDevice': [
    'id',
    'code',
    'name',
    'description',
    'stations',
    'deleted',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'ShopfloorStation': [
    'id',
    'code',
    'name',
    'description',
    'apps',
    'deleted',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'SysAction': [
    'id',
    'group',
    'code',
    'name',
    'description',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'SysActionGroup': [
    'id',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'Webhook': [
    'id',
    'name',
    'url',
    'secret',
    'namespace',
    'modelSingularCode',
    'events',
    'enabled',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'Notification': [
    'id',
    'title',
    'content',
    'read',
    'details',
    'user',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
} as const;
export type TEntityFieldCodes = typeof entityFieldCodes;
export type TEntityCodes = keyof TEntityFieldCodes;
