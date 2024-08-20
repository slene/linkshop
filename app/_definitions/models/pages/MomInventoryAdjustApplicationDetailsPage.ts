import { cloneDeep } from "lodash";
import type { RapidPage, RapidEntityFormConfig } from "@ruiapp/rapid-extension";
import { materialFormatStrTemplate } from "~/utils/fmt";

const formConfig: Partial<RapidEntityFormConfig> = {
  items: [
    {
      type: "auto",
      code: "material",
      listDataFindOptions: {
        properties: ["id", "code", "name", "specification", "defaultUnit", "category"],
        keepNonPropertyFields: true,
      },
      formControlProps: {
        dropdownMatchSelectWidth: 500,
        listTextFormat: materialFormatStrTemplate,
        listFilterFields: ["name", "code", "specification"],
        columns: [
          { code: "code", title: "编号", width: 120 },
          { code: "name", title: "名称", width: 120 },
          { code: "specification", title: "规格", width: 120 },
        ],
      },
    },
    // {
    //   type: "auto",
    //   code: "lotNum",
    //   formControlType: "materialLotNumSelector",
    //   formControlProps: {},
    //   $exps: {
    //     "formControlProps.materialId": "$self.form.getFieldValue('material')",
    //     "formControlProps.materialCategoryId": "$self.form.getFieldValue('materialCategoryId')",
    //     "formControlProps.businessTypeId": "_.get($page.scope.stores, 'detail.data.list[0].businessType.id')",
    //   },
    // },
    // {
    //   type: "auto",
    //   code: "binNum",
    // },
    // {
    //   type: "auto",
    //   code: "serialNum",
    // },
    // {
    //   type: "auto",
    //   code: "trackingCode",
    // },
    // {
    //   type: "auto",
    //   code: "tags",
    // },
    // {
    //   type: "auto",
    //   code: "quantity",
    // },
    // {
    //   type: "auto",
    //   code: "unit",
    // },
  ],
  onValuesChange: [
    {
      $action: "script",
      script: `
        const changedValues = event.args[0] || {};
        if(changedValues.hasOwnProperty('material')) {
          const _ = event.framework.getExpressionVars()._;
          const materials = _.get(event.scope.stores['dataFormItemList-material'], 'data.list');
          const material = _.find(materials, function (item) { return item.id == changedValues.material });
          event.page.sendComponentMessage(event.sender.$id, {
            name: "setFieldsValue",
            payload: {
              materialCategoryId: _.get(material, 'category.id'),
              unit: _.get(material, 'defaultUnit.id'),
              lotNum: ''
            }
          });
        }
      `,
    },
  ],
  // customRequest: {
  //   method: "post",
  //   url: "/app/createInventoryApplicationItems",
  // },
};

const page: RapidPage = {
  code: "mom_inventory_adjust_application_details",
  //@ts-ignore
  parentCode: "mom_inventory_adjust_application_list",
  name: "库存盘点申请单详情",
  title: "库存盘点申请单详情",
  // permissionCheck: {any: []},
  view: [
    {
      $type: "rapidEntityForm",
      entityCode: "MomInventoryApplication",
      mode: "view",
      column: 3,
      items: [
        {
          type: "auto",
          code: "code",
        },
        {
          type: "auto",
          code: "operationType",
        },
        {
          type: "auto",
          code: "businessType",
          rendererProps: {
            format: "{{name}}",
          },
        },
        // {
        //   type: "auto",
        //   code: "from",
        //   rendererProps: {
        //     format: "{{name}}",
        //   },
        // },
        // {
        //   type: "auto",
        //   code: "to",
        //   rendererProps: {
        //     format: "{{name}}",
        //   },
        // },
        // {
        //   type: "auto",
        //   code: "state",
        // },
        {
          type: "auto",
          code: "createdAt",
        },
      ],
      $exps: {
        entityId: "$rui.parseQuery().id",
      },
    },
    {
      $type: "pagePrint",
      slots: [],
      filters: [
        { operator: "and", filters: [{ field: "application", operator: "exists", filters: [{ field: "id", operator: "eq", value: "$rui.parseQuery().id" }] }] },
      ],
      columns: [
        { code: "material", name: "物品", isObject: true, value: "code", jointValue: "name", joinAnOtherValue: "specification" },
        { code: "lotNum", name: "批号" },
        { code: "quantity", name: "数量" },
        { code: "unit", name: "单位", isObject: true, value: "code" },
        { code: "remark", name: "备注" },
      ],
      $exps: {
        apiUrl: `'mom/mom_inventory_application_items/operations/find'`,
        orderBy: '[{"field": "orderNum"}]',
        "filters[0].filters[0].filters[0].value": "$rui.parseQuery().id",
        properties: '["id", "material", "lotNum", "quantity", "unit"]',
      },
    },
    {
      $type: "antdTabs",
      items: [
        {
          key: "items",
          label: "物品明细",
          children: [
            {
              $id: "applicationItemList",
              $type: "sonicEntityList",
              entityCode: "MomInventoryApplicationItem",
              viewMode: "table",
              selectionMode: "none",
              fixedFilters: [
                {
                  field: "application",
                  operator: "exists",
                  filters: [
                    {
                      field: "id",
                      operator: "eq",
                      value: "",
                    },
                  ],
                },
              ],
              listActions: [
                {
                  $type: "sonicToolbarNewEntityButton",
                  text: "新建",
                  icon: "PlusOutlined",
                  actionStyle: "primary",
                  $permissionCheck: "inventoryApplication.manage",
                },
                // {
                //   $type: "sonicToolbarRefreshButton",
                //   text: "刷新",
                //   icon: "ReloadOutlined",
                // },
              ],
              pageSize: -1,
              orderBy: [
                {
                  field: "orderNum",
                },
              ],
              columns: [
                // {
                //   type: 'auto',
                //   code: 'good',
                //   width: '100px',
                //   rendererProps: {
                //     format: "{{lotNum}} / {{serialNum}}",
                //   },
                // },
                {
                  type: "auto",
                  code: "material",
                  rendererType: "anchor",
                  width: "100px",
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
                // {
                //   type: "auto",
                //   code: "lotNum",
                //   width: "100px",
                // },
                // {
                //   type: "auto",
                //   code: "binNum",
                //   width: "100px",
                // },
                // {
                //   type: "auto",
                //   code: "serialNum",
                //   width: "100px",
                // },
                // {
                //   type: "auto",
                //   code: "trackingCode",
                //   width: "100px",
                // },
                // {
                //   type: "auto",
                //   code: "tags",
                //   width: "100px",
                // },
                // {
                //   type: "auto",
                //   code: "quantity",
                //   width: "100px",
                // },
                // {
                //   type: "auto",
                //   code: "unit",
                //   width: "80px",
                //   rendererProps: {
                //     format: "{{name}}",
                //   },
                // },
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
                  entityCode: "MomInventoryApplicationItem",
                  $permissionCheck: "inventoryApplication.manage",
                },
              ],
              newForm: cloneDeep(formConfig),
              editForm: cloneDeep(formConfig),
              $exps: {
                "fixedFilters[0].filters[0].value": "$rui.parseQuery().id",
                "newForm.fixedFields.application": "$rui.parseQuery().id",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default page;
