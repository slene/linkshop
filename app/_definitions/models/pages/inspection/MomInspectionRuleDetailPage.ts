import { cloneDeep } from "lodash";
import type { RapidPage, RapidEntityFormConfig } from "@ruiapp/rapid-extension";

const formConfig: Partial<RapidEntityFormConfig> = {
  items: [
    {
      type: "auto",
      code: "name",
    },
    {
      type: "auto",
      code: "skippable",
    },
    {
      type: "auto",
      code: "category",
    },
    {
      type: "auto",
      code: "method",
    },
    {
      type: "auto",
      code: "instrumentCategory",
    },
    {
      type: "auto",
      code: "instrument",
      formControlProps: {
        listTextFieldName: "code",
      },
    },
    {
      type: "auto",
      code: "kind",
    },
    {
      type: "auto",
      code: "qualitativeDetermineType",
      $exps: {
        _hidden: "$self.form.getFieldValue('kind') !== 'qualitative'",
      },
    },
    {
      type: "auto",
      code: "norminal",
      formControlType: "rapidSelect",
      formControlProps: {
        listDataSource: {
          data: {
            list: [],
          },
        },
      },
      $exps: {
        "formControlProps.listDataSource.data.list": "$self.form.getFieldValue('qualitativeNorminalValues') || []",
        _hidden: "$self.form.getFieldValue('kind') !== 'qualitative'",
      },
    },
    {
      type: "auto",
      code: "determineType",
      $exps: {
        _hidden: "$self.form.getFieldValue('kind') !== 'quantitative'",
      },
    },
    {
      type: "auto",
      code: "norminal",
      $exps: {
        _hidden: "$self.form.getFieldValue('kind') !== 'quantitative'",
      },
    },
    {
      type: "auto",
      code: "upperTol",
      $exps: {
        _hidden: "$self.form.getFieldValue('kind') !== 'quantitative' || $self.form.getFieldValue('determineType') !== 'inTolerance'",
      },
    },
    {
      type: "auto",
      code: "lowerTol",
      $exps: {
        _hidden: "$self.form.getFieldValue('kind') !== 'quantitative' || $self.form.getFieldValue('determineType') !== 'inTolerance'",
      },
    },
    {
      type: "auto",
      code: "upperLimit",
      $exps: {
        _hidden: "$self.form.getFieldValue('kind') !== 'quantitative' || $self.form.getFieldValue('determineType') !== 'inLimit'",
      },
    },
    {
      type: "auto",
      code: "lowerLimit",
      $exps: {
        _hidden: "$self.form.getFieldValue('kind') !== 'quantitative' || $self.form.getFieldValue('determineType') !== 'inLimit'",
      },
    },
  ],
  onValuesChange: [
    {
      $action: "script",
      script: `
        const changedValues = event.args[0] || {};
        if(changedValues.hasOwnProperty('qualitativeDetermineType')) {
          const _ = event.framework.getExpressionVars()._;
          const rapidAppDefinition = event.framework.getExpressionVars().rapidAppDefinition;
          const dictionary = _.find(rapidAppDefinition.getDataDictionaries(), function(d) { return d.code === 'QualitativeInspectionDetermineType'; });
          const item = _.find(_.get(dictionary, 'entries'), function(item) { return item.value === changedValues.qualitativeDetermineType; });
          const values = _.map(_.split(_.get(item, 'name'), '-'), function(v) { return { name: v, id: v } });
          event.page.sendComponentMessage(event.sender.$id, {
            name: "setFieldsValue",
            payload: {
              norminal: '',
              qualitativeNorminalValues: values || [],
            }
          });
        }else if(changedValues.hasOwnProperty('kind')){
          event.page.sendComponentMessage(event.sender.$id, {
            name: "setFieldsValue",
            payload: {
              norminal: undefined,
              qualitativeDetermineType: undefined,
              determineType: undefined,
              upperTol: undefined,
              lowerTol: undefined,
              upperLimit: undefined,
              lowerLimit: undefined,
              qualitativeNorminalValues: [],
            }
          });
        }
      `,
    },
  ],
};

const page: RapidPage = {
  code: "mom_inspection_rule_details",
  //@ts-ignore
  parentCode: "mom_inspection_rule_list",
  name: "检验规则详情",
  title: "检验规则详情",
  // permissionCheck: {any: []},
  view: [
    {
      $type: "rapidEntityForm",
      entityCode: "MomInspectionRule",
      mode: "view",
      column: 3,
      items: [
        {
          type: "auto",
          code: "category",
          rendererProps: {
            format: "{{name}}",
          },
        },
        {
          type: "auto",
          code: "material",
          rendererProps: {
            format: "{{name}}",
          },
        },
        {
          type: "auto",
          code: "routeProcess",
          rendererProps: {
            format: "{{aliasName}}",
          },
        },
        {
          type: "auto",
          code: "createdAt",
          width: "150px",
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
          key: "items",
          label: "检验特征",
          children: [
            {
              $id: "momInspectionCharacteristicList",
              $type: "sonicEntityList",
              entityCode: "MomInspectionCharacteristic",
              viewMode: "table",
              fixedFilters: [
                {
                  field: "rule",
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
                },
                {
                  $type: "sonicToolbarRefreshButton",
                  text: "刷新",
                  icon: "ReloadOutlined",
                },
              ],
              pageSize: -1,
              orderBy: [
                {
                  field: "id",
                },
              ],
              columns: [
                {
                  type: "auto",
                  code: "name",
                },
                {
                  type: "auto",
                  code: "skippable",
                },
                {
                  type: "auto",
                  code: "category",
                  rendererProps: {
                    format: "{{name}}",
                  },
                },
                {
                  type: "auto",
                  code: "method",
                  rendererProps: {
                    format: "{{name}}",
                  },
                },
                {
                  type: "auto",
                  code: "instrumentCategory",
                  rendererProps: {
                    format: "{{name}}",
                  },
                },
                {
                  type: "auto",
                  code: "instrument",
                  rendererProps: {
                    format: "{{code}}",
                  },
                },
                {
                  type: "auto",
                  code: "determineType",
                },
                {
                  type: "auto",
                  code: "qualitativeDetermineType",
                },
                {
                  type: "auto",
                  code: "kind",
                },
                {
                  type: "auto",
                  code: "norminal",
                },
                {
                  type: "auto",
                  code: "upperTol",
                },
                {
                  type: "auto",
                  code: "lowerTol",
                },
                {
                  type: "auto",
                  code: "upperLimit",
                },
                {
                  type: "auto",
                  code: "lowerLimit",
                },
                {
                  type: "auto",
                  code: "createdAt",
                  width: "150px",
                },
              ],
              actions: [
                {
                  $type: "sonicRecordActionEditEntity",
                  code: "edit",
                  actionType: "edit",
                  actionText: "修改",
                },
                {
                  $type: "sonicRecordActionDeleteEntity",
                  code: "delete",
                  actionType: "delete",
                  actionText: "删除",
                  dataSourceCode: "list",
                  entityCode: "MomInspectionCharacteristic",
                },
              ],
              newForm: cloneDeep(formConfig),
              editForm: cloneDeep(formConfig),
              $exps: {
                "fixedFilters[0].filters[0].value": "$rui.parseQuery().id",
                "newForm.fixedFields.rule_id": "$rui.parseQuery().id",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default page;
