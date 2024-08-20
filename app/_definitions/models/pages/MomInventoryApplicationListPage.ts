import { cloneDeep } from "lodash";
import type { RapidPage, RapidEntityFormConfig } from "@ruiapp/rapid-extension";

const formConfig: Partial<RapidEntityFormConfig> = {
  items: [
    // {
    //   type: "auto",
    //   code: "code",
    // },
    {
      type: "auto",
      code: "operationType",
      hidden: true,
    },
    {
      type: "auto",
      code: "businessType",
    },
    {
      type: "auto",
      code: "applicant",
    },
    // {
    //   type: "auto",
    //   code: "from",
    // },
    // {
    //   type: "auto",
    //   code: "to",
    // },
    // {
    //   type: "auto",
    //   code: "operationState",
    // },
  ],
  defaultFormFields: {
    state: "approved",
    operationState: "pending",
  },
};

const page: RapidPage = {
  code: "mom_inventory_application_list",
  name: "库存业务申请",
  title: "库存业务申请",
  permissionCheck: { any: [] },
  view: [
    {
      $id: "inventoryApplicationList",
      $type: "sonicEntityList",
      entityCode: "MomInventoryApplication",
      viewMode: "table",
      selectionMode: "none",
      expandedRow: {
        $id: `applicationItemList_`,
        $type: "rapidEntityList",
        entityCode: "MomInventoryApplicationItem",
        dataSourceType: "dataSource",
        viewMode: "table",
        selectionMode: "none",
        // fixedFilters: [
        //   {
        //     field: "application",
        //     operator: "exists",
        //     filters: [
        //       {
        //         field: "id",
        //         operator: "eq",
        //         value: "",
        //       },
        //     ],
        //   },
        // ],
        pageSize: -1,
        // orderBy: [
        //   {
        //     field: "orderNum",
        //   },
        // ],
        columns: [
          {
            type: "auto",
            code: "material",
            rendererType: "anchor",
            rendererProps: {
              children: {
                $type: "materialLabelRenderer",
                $exps: {
                  value: "$slot.value",
                },
              },
              $exps: {
                href: "$rui.execVarText('/pages/base_material_details?id={{id}}', $slot.value)",
              },
            },
          },
          {
            type: "auto",
            code: "lotNum",
            width: "180px",
          },
          {
            type: "auto",
            code: "quantity",
            width: "100px",
          },
          {
            type: "auto",
            code: "unit",
            width: "80px",
            rendererProps: {
              format: "{{name}}",
            },
          },
          {
            type: "auto",
            code: "remark",
          },
        ],
        $exps: {
          // "fixedFilters[0].filters[0].value": "_.get($self.record, 'id')",
          // dataSourceCode: "'id' + _.get($self.record, 'id')",
          dataSource: "_.get($self.record, 'items')",
          $id: "'applicationItemList_' + _.get($self.record, 'id')",
        },
      },
      // filterForm: {
      //   column: 3,
      //   items: [
      //     {
      //       type: "auto",
      //       code: "code",
      //     },
      //     {
      //       type: "auto",
      //       code: "operationType",
      //     },
      //     {
      //       type: "auto",
      //       code: "businessType",
      //     },
      //   ],
      // },
      listActions: [
        // {
        //   $type: "sonicToolbarNewEntityButton",
        //   text: "新建",
        //   icon: "PlusOutlined",
        //   actionStyle: "primary",
        //   $permissionCheck: "inventoryApplication.manage",
        // },
        {
          $type: "antdButton",
          icon: {
            $type: "antdIcon",
            name: "PlusOutlined",
          },
          type: "primary",
          href: `/pages/mom_inventory_application_form`,
          children: [
            {
              $type: "text",
              text: " 新建",
            },
          ],
          $permissionCheck: "inventoryApplication.manage",
        },
        {
          $type: "antdButton",
          href: `/api/app/exportExcel?type=application`,
          children: [
            {
              $type: "text",
              text: " 下载",
            },
          ],
        },
      ],
      relations: {
        items: {
          properties: ["id", "material", "lotNum", "quantity", "unit", "remark"],
        },
      },
      extraProperties: ["operationType", "items"],
      extraActions: [
        {
          $type: "sonicToolbarFormItem",
          formItemType: "search",
          placeholder: "Search",
          actionEventName: "onSearch",
          filterMode: "contains",
          filterFields: ["code"],
        },
      ],
      searchForm: {
        entityCode: "MomInventoryApplication",
        items: [
          {
            type: "input",
            code: "items",
            formControlProps: {
              placeholder: "搜索物品名称、编号、规格",
            },
            filterMode: "in",
            filterFields: [
              {
                field: "items",
                operator: "exists",
                filters: [
                  {
                    field: "material",
                    operator: "exists",
                    filters: [
                      {
                        operator: "or",
                        filters: [
                          {
                            field: "name",
                            operator: "contains",
                          },
                          {
                            field: "code",
                            operator: "contains",
                          },
                          {
                            field: "specification",
                            operator: "contains",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "auto",
            code: "businessType",
            filterMode: "in",
            filterFields: ["business_id"],
          },
          {
            type: "auto",
            code: "applicant",
            filterMode: "in",
            filterFields: ["applicant_id"],
          },
          {
            type: "dateRange",
            code: "createdAt",
            filterMode: "range",
            filterExtra: {
              rangeUnit: "day",
            },
          },
          {
            type: "auto",
            code: "operationState",
            filterMode: "in",
            itemType: "text",
          },
        ],
      },
      fixedFilters: [
        {
          operator: "or",
          filters: [
            {
              operator: "eq",
              field: "operationType",
              value: "in",
            },
            {
              operator: "eq",
              field: "operationType",
              value: "out",
            },
          ],
        },
      ],
      orderBy: [
        {
          field: "createdAt",
          desc: true,
        },
      ],
      pageSize: 20,
      columns: [
        {
          type: "link",
          code: "code",
          // rendererType: 'rapidLinkRenderer',
          rendererProps: {
            url: "/pages/mom_inventory_application_details?id={{id}}",
          },
          width: "200px",
        },
        {
          type: "auto",
          code: "source",
          width: "120px",
        },
        // {
        //   type: "auto",
        //   code: "operationType",
        //   width: "150px",
        // },
        {
          type: "auto",
          code: "businessType",
          width: "150px",
          rendererProps: {
            format: "{{name}}",
          },
        },
        // {
        //   type: "auto",
        //   code: "from",
        //   width: "150px",
        //   rendererProps: {
        //     format: "{{name}}",
        //   },
        // },
        // {
        //   type: "auto",
        //   code: "to",
        //   width: "150px",
        //   rendererProps: {
        //     format: "{{name}}",
        //   },
        // },
        {
          type: "auto",
          code: "applicant",
          width: "150px",
          rendererProps: {
            format: "{{name}}",
          },
        },
        {
          type: "auto",
          code: "createdAt",
          width: "150px",
        },
        // {
        //   type: "auto",
        //   code: "state",
        //   width: "150px",
        // },
        {
          type: "auto",
          code: "operationState",
          width: "150px",
        },
      ],
      actions: [
        {
          $type: "sonicRecordActionEditEntity",
          code: "edit",
          actionType: "edit",
          actionText: "修改",
          $permissionCheck: "inventoryApplication.manage",
        },
        {
          $type: "sonicRecordActionDeleteEntity",
          code: "delete",
          actionType: "delete",
          actionText: "删除",
          dataSourceCode: "list",
          entityCode: "MomInventoryApplication",
          $permissionCheck: "inventoryApplication.manage",
        },
        {
          $type: "rapidTableAction",
          code: "dispatch",
          actionText: "下发",
          $permissionCheck: "inventoryApplication.manage",
          $exps: {
            _hidden: "$slot.record.operationState !== 'pending' || $slot.record.operationType !== 'in'",
          },
          onAction: [
            {
              $action: "sendHttpRequest",
              method: "POST",
              url: "/api/mom/mom_inventory_operations",
              data: {
                state: "processing",
                approvalState: "uninitiated",
              },
              $exps: {
                "data.application": "$event.args[0].id",
                "data.businessType": "$event.args[0].businessType.id",
                "data.operationType": "$event.args[0].businessType.operationType",
              },
            },
            {
              $action: "antdMessage",
              title: "单据下发成功。",
              onClose: [
                {
                  $action: "loadScopeData",
                },
              ],
            },
          ],
        },
      ],
      newForm: cloneDeep(formConfig),
      editForm: cloneDeep(formConfig),
      $exps: {
        "newForm.fixedFields.state": "'approved'",
        "newForm.fixedFields.operationState": "'pending'",
      },
    },
  ],
};

export default page;
