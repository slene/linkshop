import type { RapidPage } from "@ruiapp/rapid-extension";

const page: RapidPage = {
  code: "mom_inspection_sheet_details",
  //@ts-ignore
  parentCode: "mom_inspection_sheet_list",
  name: "检验单详情",
  title: "检验单详情",

  permissionCheck: { any: [] },
  view: [
    {
      $type: "rapidEntityForm",
      entityCode: "MomInspectionSheet",
      mode: "view",
      column: 3,
      extraProperties: ["sampleCount"],
      relations: {
        material: {
          properties: ["id", "code", "name", "specification", "category"],
          relations: {
            category: {
              properties: ["id", "code", "name", "printTemplate"],
            },
          },
        },
      },
      items: [
        {
          code: "code",
          type: "auto",
        },
        {
          code: "state",
          type: "auto",
        },
        {
          type: "auto",
          code: "approvalState",
        },
        {
          code: "result",
          type: "auto",
        },
        {
          code: "material",
          type: "auto",
          rendererProps: {
            format: materialFormatStrTemplate,
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
        {
          type: "auto",
          code: "customer",
        },
        {
          code: "lotNum",
          type: "auto",
        },
        // {
        //   code: "serialNum",
        //   type: "auto",
        // },
        {
          code: "sampleCount",
          type: "auto",
        },
        // {
        //   code: "workOrder",
        //   type: "auto",
        //   rendererProps: {
        //     format: "{{code}}",
        //   },
        // formControlProps: {
        //   listTextFormat: "{{code}}",
        //   listFilterFields: ["code"],
        //   columns: [{ code: "code", title: "编号" }],
        // }
        // },
        // {
        //   code: "workTrack",
        //   type: "auto",
        //   rendererProps: {
        //     format: "{{code}}",
        //   },
        // formControlProps: {
        //   listTextFormat: "{{code}}",
        //   listFilterFields: ["code"],
        //   columns: [{ code: "code", title: "编号" }],
        // }
        // },
        // {
        //   code: "workTask",
        //   type: "auto",
        //   rendererProps: {
        //     format: "{{code}}",
        //   },
        // formControlProps: {
        //   listTextFormat: "{{code}}",
        //   listFilterFields: ["code"],
        //   columns: [{ code: "code", title: "编号" }],
        // }
        // },
        {
          code: "inventoryOperation",
          type: "auto",
          rendererProps: {
            format: "{{code}}",
          },
          formControlProps: {
            listTextFormat: "{{code}}",
            listFilterFields: ["code"],
            columns: [{ code: "code", title: "操作单号" }],
          },
        },
        {
          code: "rule",
          type: "auto",
          rendererProps: {
            format: "{{name}}",
          },
        },
        // {
        //   code: "routeProcess",
        //   type: "auto",
        // },
        {
          code: "sender",
          type: "auto",
          rendererProps: {
            format: "{{name}}",
          },
        },
        {
          code: "inspector",
          type: "auto",
          rendererProps: {
            format: "{{name}}",
          },
        },
        {
          code: "reviewer",
          type: "auto",
          rendererProps: {
            format: "{{name}}",
          },
        },
      ],
      $exps: {
        entityId: "$rui.parseQuery().id",
      },
    },
    {
      $type: "antdTabs",
      items: [
        {
          key: "measurements",
          label: "检验记录",
          children: [
            {
              $id: "userList",
              $type: "sonicEntityList",
              entityCode: "MomInspectionMeasurement",
              viewMode: "table",
              selectionMode: "none",
              fixedFilters: [
                {
                  field: "sheet_id",
                  operator: "eq",
                  value: "",
                },
              ],
              listActions: [
                {
                  $type: "sonicToolbarNewEntityButton",
                  text: "新建",
                  icon: "PlusOutlined",
                  actionStyle: "primary",
                  // $permissionCheck: "inspectionSheet.manage",
                },
                {
                  $type: "sonicToolbarRefreshButton",
                  text: "刷新",
                  icon: "ReloadOutlined",
                },
              ],
              columns: [
                {
                  code: "sampleCode",
                  type: "text",
                },
                {
                  code: "characteristic",
                  type: "auto",
                  rendererProps: {
                    format: "{{name}}",
                  },
                },
                {
                  code: "instrumentCategory",
                  type: "auto",
                  rendererProps: {
                    format: "{{name}}",
                  },
                },
                {
                  code: "instrument",
                  type: "auto",
                  rendererProps: {
                    format: "{{code}}",
                  },
                },
                {
                  code: "inspector",
                  type: "auto",
                  rendererProps: {
                    format: "{{name}}",
                  },
                },
                {
                  code: "inspectedAt",
                  type: "auto",
                },
                {
                  code: "qualitativeValue",
                  type: "auto",
                },
                {
                  code: "quantitativeValue",
                  type: "auto",
                },
                {
                  code: "isQualified",
                  type: "auto",
                },
              ],
              actions: [
                {
                  $type: "sonicRecordActionDeleteEntity",
                  code: "delete",
                  actionType: "delete",
                  actionText: "删除",
                  $permissionCheck: "inspectionSheet.manage",
                  dataSourceCode: "list",
                  entityCode: "MomInspectionMeasurement",
                },
              ],
              newForm: cloneDeep(inspectionMeasurementFormConfig),
              $exps: {
                entityId: "$rui.parseQuery().id",
              },
            },
          ],
        },
      ],
    },
    {
      $type: "sectionSeparator",
      showLine: false,
    },
    {
      $type: "rapidToolbar",
      items: [
        {
          $type: "rapidToolbarButton",
          text: "批准",
          actionStyle: "primary",
          size: "large",
          // $permissionCheck: "inspectionSheet.review",
          onAction: [
            {
              $action: "sendHttpRequest",
              method: "PATCH",
              data: { approvalState: "approved" },
              $exps: {
                url: `"/api/mom/mom_inspection_sheets/" + $rui.parseQuery().id`,
              },
            },
            {
              $action: "antdMessage",
              title: "审核成功",
              onClose: [
                {
                  $action: "reloadPage",
                },
              ],
            },
          ],
          $exps: {
            _hidden: "_.get(_.first(_.get($stores.detail, 'data.list')), 'approvalState') !== 'approving'",
          },
        },
        {
          $type: "rapidToolbarButton",
          text: "拒绝",
          danger: true,
          size: "large",
          // $permissionCheck: "inspectionSheet.review",
          onAction: [
            {
              $action: "sendHttpRequest",
              method: "PATCH",
              data: { approvalState: "rejected" },
              $exps: {
                url: `"/api/mom/mom_inspection_sheets/" + $rui.parseQuery().id`,
              },
            },
            {
              $action: "antdMessage",
              title: "审核成功",
              onClose: [
                {
                  $action: "reloadPage",
                },
              ],
            },
          ],
          $exps: {
            _hidden: "_.get(_.first(_.get($stores.detail, 'data.list')), 'approvalState') !== 'approving'",
          },
        },
      ],
    },
  ],
};

export default page;
