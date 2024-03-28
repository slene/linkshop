export const entitySingularCodes = [
  'app_client',
  'app_nav_item',
  'base_building',
  'base_employee',
  'base_form_field',
  'base_gate',
  'base_location',
  'base_material',
  'base_material_category',
  'base_material_document',
  'base_material_type',
  'base_office',
  'base_partner',
  'base_partner_category',
  'base_unit',
  'base_unit_category',
  'bpm_business_activity',
  'bpm_business_application',
  'bpm_business_category',
  'bpm_business_process',
  'bpm_business_process_revision',
  'bpm_business_task',
  'cbs_contract',
  'cbs_contract_file',
  'cbs_contract_funding_budget',
  'cbs_contract_relation',
  'cbs_contract_relation_kind',
  'cbs_order',
  'cbs_order_item',
  'ecm_document',
  'ecm_revision',
  'ecm_storage_object',
  'fin_account',
  'fin_business_category',
  'fin_expense_category',
  'fin_transaction',
  'data_dictionary',
  'data_dictionary_entry',
  'model',
  'property',
  'route',
  'mom_equipment',
  'mom_equipment_category',
  'mom_good',
  'mom_good_label',
  'mom_good_location',
  'mom_good_transfer',
  'mom_inspection_category',
  'mom_inspection_characteristic',
  'mom_inspection_characteristic_category',
  'mom_inspection_instrument',
  'mom_inspection_instrument_category',
  'mom_inspection_method',
  'mom_inspection_record',
  'mom_inspection_rule',
  'mom_inspection_sheet',
  'mom_inventory',
  'mom_inventory_business_type',
  'mom_inventory_label',
  'mom_inventory_operation',
  'mom_lab',
  'mom_line',
  'mom_manufacturing_resource_plan',
  'mom_master_production_schedule',
  'mom_master_production_schedule_item',
  'mom_material_breakdown',
  'mom_material_breakdown_part',
  'mom_package',
  'mom_package_good',
  'mom_process',
  'mom_process_category',
  'mom_route',
  'mom_route_process',
  'mom_route_process_input',
  'mom_route_process_output',
  'mom_route_template',
  'mom_route_template_process',
  'mom_shift',
  'mom_shop',
  'mom_station',
  'mom_warehouse',
  'mom_work_order',
  'mom_work_report',
  'mom_work_task',
  'mom_work_team',
  'mom_work_track',
  'oc_department',
  'oc_role',
  'oc_user',
  'pm_milestone',
  'pm_phase',
  'pm_project',
  'pm_project_budget',
  'pm_project_category',
  'pm_project_cost_budget',
  'pm_project_cost_category',
  'pm_project_event',
  'shop_floor_app',
  'shop_floor_app_step',
  'shop_floor_app_version',
  'shop_floor_display_device',
  'shop_floor_station',
  'sys_action',
  'sys_action_group',
  'webhook',
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
    'detetedBy',
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
    'detetedBy',
  ],
  'BaseBuilding': [
    'id',
    'location',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BaseEmployee': [
    'id',
    'code',
    'name',
    'department',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BaseFormField': [
    'id',
    'code',
    'name',
    'source',
    'externalId',
    'externalData',
    'fieldType',
    'state',
    'description',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BaseGate': [
    'id',
    'location',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BaseLocation': [
    'id',
    'parent',
    'type',
    'code',
    'name',
    'description',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BaseMaterial': [
    'id',
    'code',
    'name',
    'brand',
    'specification',
    'description',
    'category',
    'defaultUnit',
    'types',
    'canProduce',
    'canPurchase',
    'canOutsource',
    'canSale',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BaseMaterialCategory': [
    'id',
    'code',
    'name',
    'defaultUnit',
    'orderNum',
    'parent',
    'materials',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BaseMaterialDocument': [
    'id',
    'material',
    'document',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BaseMaterialType': [
    'id',
    'materials',
    'code',
    'name',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BaseOffice': [
    'id',
    'building',
    'location',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BasePartner': [
    'id',
    'code',
    'name',
    'categories',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BasePartnerCategory': [
    'id',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BaseUnit': [
    'id',
    'code',
    'name',
    'nameEn',
    'printSymbol',
    'type',
    'orderNum',
    'category',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BaseUnitCategory': [
    'id',
    'name',
    'orderNum',
    'units',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BpmBusinessActivity': [
    'id',
    'application',
    'name',
    'kind',
    'tasks',
    'state',
    'resolution',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BpmBusinessApplication': [
    'id',
    'process',
    'code',
    'title',
    'formData',
    'initiator',
    'initiatedAt',
    'approvedAt',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BpmBusinessCategory': [
    'id',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BpmBusinessProcess': [
    'id',
    'category',
    'name',
    'description',
    'formConfig',
    'flowConfig',
    'listConfig',
    'advancedConfig',
    'state',
    'publishState',
    'activeRevision',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BpmBusinessProcessRevision': [
    'id',
    'process',
    'name',
    'description',
    'formConfig',
    'flowConfig',
    'advancedConfig',
    'publishState',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'BpmBusinessTask': [
    'id',
    'activity',
    'assignee',
    'state',
    'resolution',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'CbsContract': [
    'id',
    'kind',
    'code',
    'name',
    'description',
    'project',
    'salesman',
    'orders',
    'totalAmount',
    'signingDate',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'CbsContractFile': [
    'id',
    'code',
    'name',
    'size',
    'description',
    'contract',
    'storageObject',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'CbsContractFundingBudget': [
    'id',
    'code',
    'name',
    'description',
    'project',
    'salesman',
    'orders',
    'totalAmount',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'CbsContractRelation': [
    'id',
    'main',
    'target',
    'kind',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'CbsContractRelationKind': [
    'id',
    'code',
    'name',
    'orderNum',
    'opposite',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'CbsOrder': [
    'id',
    'kind',
    'code',
    'name',
    'description',
    'projects',
    'contracts',
    'mrp',
    'items',
    'totalAmount',
    'taxFee',
    'transactions',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'CbsOrderItem': [
    'id',
    'order',
    'mrp',
    'orderNum',
    'subject',
    'name',
    'tags',
    'description',
    'price',
    'quantity',
    'unit',
    'taxRate',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'EcmDocument': [
    'id',
    'code',
    'name',
    'extName',
    'title',
    'size',
    'lastRevision',
    'storageObject',
    'ref',
    'parent',
    'publishState',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
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
    'detetedBy',
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
    'detetedBy',
  ],
  'FinAccount': [
    'id',
    'code',
    'name',
    'description',
    'initialAmount',
    'balance',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'FinBusinessCategory': [
    'id',
    'code',
    'name',
    'orderNum',
    'parent',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'FinExpenseCategory': [
    'id',
    'code',
    'name',
    'orderNum',
    'parent',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'FinTransaction': [
    'id',
    'code',
    'account',
    'type',
    'description',
    'amount',
    'balance',
    'transferedAt',
    'state',
    'contract',
    'order',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
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
    'detetedBy',
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
    'detetedBy',
  ],
  'Model': [
    'id',
    'namespace',
    'name',
    'description',
    'singularCode',
    'pluralCode',
    'properties',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
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
    'detetedBy',
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
    'detetedBy',
  ],
  'MomEquipment': [
    'id',
    'code',
    'name',
    'category',
    'state',
    'powerState',
    'productionState',
    'planedDailyWorkingTime',
    'station',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomEquipmentCategory': [
    'id',
    'name',
    'orderNum',
    'parent',
    'equipments',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomGood': [
    'id',
    'material',
    'materialCode',
    'lotNum',
    'binNum',
    'serialNum',
    'quantity',
    'unit',
    'location',
    'putInTime',
    'source',
    'tags',
    'labels',
    'state',
    'extra',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomGoodLabel': [
    'id',
    'good',
    'name',
    'textValue',
    'numberValue',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomGoodLocation': [
    'id',
    'good',
    'location',
    'putInTime',
    'takeOutTime',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomGoodTransfer': [
    'id',
    'operation',
    'orderNum',
    'good',
    'material',
    'lotNum',
    'binNum',
    'serialNum',
    'tags',
    'quantity',
    'unit',
    'from',
    'to',
    'transferTime',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInspectionCategory': [
    'id',
    'code',
    'name',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInspectionCharacteristic': [
    'id',
    'rule',
    'name',
    'category',
    'method',
    'instrumentCategory',
    'instrument',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInspectionCharacteristicCategory': [
    'id',
    'name',
    'description',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInspectionInstrument': [
    'id',
    'code',
    'category',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInspectionInstrumentCategory': [
    'id',
    'name',
    'description',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInspectionMethod': [
    'id',
    'name',
    'description',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInspectionRecord': [
    'id',
    'sheet',
    'sampleCode',
    'characteristic',
    'instrumentCategory',
    'instrument',
    'inspector',
    'inspectedAt',
    'qualitativeValue',
    'quantitativeValue',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInspectionRule': [
    'id',
    'category',
    'material',
    'routeProcess',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInspectionSheet': [
    'id',
    'code',
    'state',
    'material',
    'materialCode',
    'lotNum',
    'serialNum',
    'workOrder',
    'workTrack',
    'workTask',
    'rule',
    'routeProcess',
    'inspector',
    'records',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInventory': [
    'id',
    'material',
    'warehouse',
    'allocableQuantity',
    'availableQuantity',
    'purchasedQuantity',
    'intransitQuantity',
    'instockQuantity',
    'processingQuantity',
    'processedQuantity',
    'yieldQuantity',
    'reservedQuantity',
    'allocatedQuantity',
    'shippingQuantity',
    'deliveredQuantity',
    'unit',
    'lotNum',
    'binNum',
    'serialNum',
    'tags',
    'labels',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInventoryBusinessType': [
    'id',
    'operationType',
    'name',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInventoryLabel': [
    'id',
    'inventory',
    'name',
    'textValue',
    'numberValue',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomInventoryOperation': [
    'id',
    'code',
    'operationType',
    'businessType',
    'businessDetails',
    'state',
    'transfers',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomLab': [
    'id',
    'building',
    'location',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomLine': [
    'id',
    'shop',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomManufacturingResourcePlan': [
    'id',
    'name',
    'result',
    'planningState',
    'executionState',
    'productionSchedules',
    'workOrders',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomMasterProductionSchedule': [
    'id',
    'code',
    'material',
    'tags',
    'quantity',
    'unit',
    'scheduledStartDate',
    'scheduledFinishDate',
    'actualStartDate',
    'actualFinishDate',
    'scheduleState',
    'executionState',
    'mrp',
    'productionOrders',
    'purchaseOrders',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomMasterProductionScheduleItem': [
    'id',
    'productionPlan',
    'material',
    'quantity',
    'unit',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomMaterialBreakdown': [
    'id',
    'material',
    'version',
    'quantity',
    'unit',
    'state',
    'parts',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomMaterialBreakdownPart': [
    'id',
    'materialBreakdown',
    'orderNum',
    'subMaterial',
    'matchTags',
    'quantity',
    'unit',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomPackage': [
    'id',
    'code',
    'goods',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomPackageGood': [
    'id',
    'package_id',
    'good',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomProcess': [
    'id',
    'code',
    'name',
    'category',
    'orderNum',
    'standardCycleTime',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomProcessCategory': [
    'id',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomRoute': [
    'id',
    'material',
    'version',
    'state',
    'publishState',
    'processes',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomRouteProcess': [
    'id',
    'route',
    'orderNum',
    'process',
    'aliasName',
    'inputs',
    'outputs',
    'standardCycleTime',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomRouteProcessInput': [
    'id',
    'routeProcess',
    'material',
    'quantity',
    'unit',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomRouteProcessOutput': [
    'id',
    'routeProcess',
    'material',
    'quantity',
    'unit',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomRouteTemplate': [
    'id',
    'name',
    'processes',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomRouteTemplateProcess': [
    'id',
    'routeTemplate',
    'process',
    'standardCycleTime',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomShift': [
    'id',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomShop': [
    'id',
    'building',
    'location',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomStation': [
    'id',
    'building',
    'location',
    'shop',
    'line',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomWarehouse': [
    'id',
    'building',
    'location',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomWorkOrder': [
    'id',
    'code',
    'mrp',
    'material',
    'tags',
    'route',
    'quantity',
    'unit',
    'assignmentState',
    'executionState',
    'scheduledStartDate',
    'scheduledFinishDate',
    'actualStartDate',
    'actualFinishDate',
    'productionTasks',
    'workReports',
    'inspectionSheets',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomWorkReport': [
    'id',
    'code',
    'workOrder',
    'workTrack',
    'workTask',
    'route',
    'routeProcess',
    'quantity',
    'qualifiedQuantity',
    'unqualifiedQuantity',
    'scrapQuantity',
    'unit',
    'equipment',
    'operators',
    'extra',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomWorkTask': [
    'id',
    'code',
    'workOrder',
    'workTrack',
    'material',
    'route',
    'routeProcess',
    'scheduledStartDate',
    'scheduledFinishDate',
    'actualStartDate',
    'actualFinishDate',
    'quantity',
    'unit',
    'equipment',
    'assignees',
    'deadline',
    'assigner',
    'assignedAt',
    'acceptedAt',
    'assignmentState',
    'executionState',
    'workReports',
    'inspectionSheets',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomWorkTeam': [
    'id',
    'shop',
    'code',
    'name',
    'orderNum',
    'leader',
    'members',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'MomWorkTrack': [
    'id',
    'code',
    'workOrder',
    'assignmentState',
    'executionState',
    'material',
    'route',
    'quantity',
    'unit',
    'scheduledStartDate',
    'scheduledFinishDate',
    'actualStartDate',
    'actualFinishDate',
    'productionTasks',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'OcDepartment': [
    'id',
    'parent',
    'code',
    'name',
    'orderNum',
    'users',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'OcRole': [
    'id',
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
    'detetedBy',
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
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'PmMilestone': [
    'id',
    'project',
    'phase',
    'name',
    'description',
    'deadline',
    'state',
    'completedAt',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'PmPhase': [
    'id',
    'project',
    'name',
    'description',
    'startDate',
    'endDate',
    'state',
    'actualStartedAt',
    'actualCompletedAt',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'PmProject': [
    'id',
    'code',
    'name',
    'description',
    'category',
    'customer',
    'stage',
    'state',
    'owner',
    'salesman',
    'projectManager',
    'distributor',
    'phases',
    'milestones',
    'orders',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'PmProjectBudget': [
    'id',
    'project',
    'orderNum',
    'type',
    'title',
    'subject',
    'cost',
    'price',
    'quantity',
    'unit',
    'taxRate',
    'businessCategory',
    'expenseCategory',
    'scheduledPaymentDate',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'PmProjectCategory': [
    'id',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'PmProjectCostBudget': [
    'id',
    'project',
    'title',
    'amount',
    'costCategory',
    'paymentTime',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'PmProjectCostCategory': [
    'id',
    'code',
    'name',
    'description',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'PmProjectEvent': [
    'id',
    'project',
    'title',
    'content',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'ShopFloorApp': [
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
    'detetedBy',
  ],
  'ShopFloorAppStep': [
    'id',
    'app',
    'code',
    'kind',
    'orderNum',
    'triggers',
    'schema',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'detetedBy',
  ],
  'ShopFloorAppVersion': [
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
    'detetedBy',
  ],
  'ShopFloorDisplayDevice': [
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
    'detetedBy',
  ],
  'ShopFloorStation': [
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
    'detetedBy',
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
    'detetedBy',
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
    'detetedBy',
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
    'detetedBy',
  ],
} as const;
export type TEntityFieldCodes = typeof entityFieldCodes;
export type TEntityCodes = keyof TEntityFieldCodes;
