import { cloneDeep } from 'lodash';
import type { RapidPage, RapidEntityFormConfig } from '@ruiapp/rapid-extension';

const orderItemFormConfig: Partial<RapidEntityFormConfig> = {
  items: [
    {
      type: 'auto',
      code: 'orderNum',
    },
    {
      type: 'auto',
      code: 'subject',
      listDataFindOptions: {
        properties: ['id', 'code', 'name', 'defaultUnit'],
      },
      formControlProps: {
        listTextFormat: "{{code}} {{name}}",
        listFilterFields: ['label']
      }
    },
    {
      type: 'auto',
      code: 'name',
    },
    {
      type: 'textarea',
      code: 'description',
    },
    {
      type: 'auto',
      code: 'quantity',
    },
    {
      type: 'auto',
      code: 'unit',
    },
    {
      type: 'auto',
      code: 'price',
    },
    {
      type: 'auto',
      code: 'taxRate',
    },
  ],
  onValuesChange: [
    {
      $action: "script",
      script: `function (event) {
        const changedValues = event.args[0] || {};
        console.log('event', event)
        console.log('changedValue', changedValues)
        if(changedValues.hasOwnProperty('subject')) {
          const _ = event.framework.getExpressionVars()._;
          const materials = _.get(event.scope.stores['dataFormItemList-subject'], 'data.list');
          const subject = _.find(materials, function (item) { return item.id == changedValues.subject });
          const unitId = _.get(subject, 'defaultUnit.id');
          event.page.sendComponentMessage(event.sender.$id, {
            name: "setFieldsValue",
            payload: {
              unit: unitId
            }
          });
        }
      }`
    },
  ]
};


const page: RapidPage = {
  code: 'cbs_order_details',
  name: '订单详情',
  title: '订单详情',
  view: [
    {
      $type: 'rapidEntityForm',
      entityCode: 'CbsOrder',
      mode: 'view',
      column: 3,
      items: [
        {
          type: 'auto',
          code: 'kind',
        },
        {
          type: 'auto',
          code: 'code',
        },
        {
          type: 'auto',
          code: 'name',
        },
        {
          type: 'auto',
          code: 'description',
        },
        {
          type: 'auto',
          code: 'state',
        },
      ],
      $exps: {
        entityId: "$rui.parseQuery().id",
      }
    },
    {
      $type: "antdTabs",
      items: [
        {
          key: "items",
          label: "订单明细",
          children: [
            {
              $id: "projectLogList",
              $type: "sonicEntityList",
              entityCode: "CbsOrderItem",
              viewMode: "table",
              fixedFilters: [
                {
                  field: "order",
                  operator: "exists",
                  filters: [
                    {
                      field: "id",
                      operator: "eq",
                      value: ""
                    }
                  ]
                }
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
                  field: 'orderNum',
                }
              ],
              columns: [
                {
                  type: 'auto',
                  code: 'orderNum',
                  width: '100px',
                },
                {
                  type: 'auto',
                  code: 'name',
                  width: '150px',
                },
                {
                  type: 'auto',
                  code: 'description',
                },
                {
                  type: 'auto',
                  code: 'quantity',
                  width: '100px',
                  align: 'right',
                },
                {
                  type: 'auto',
                  code: 'unit',
                  width: '50px',
                  rendererProps: {
                    format: '{{name}}',
                  },
                },
                {
                  type: 'auto',
                  code: 'price',
                  width: '100px',
                  align: 'right',
                  rendererProps: {
                    usingThousandSeparator: true,
                    decimalPlaces: 2,
                  }
                },
                {
                  type: 'auto',
                  code: 'taxRate',
                  width: '60px',
                  align: 'right',
                  rendererType: 'rapidPercentRenderer',
                },
                {
                  type: 'auto',
                  code: 'id',
                  title: '税费',
                  width: '100px',
                  align: 'right',
                  rendererType: 'rapidNumberRenderer',
                  rendererProps: {
                    usingThousandSeparator: true,
                    decimalPlaces: 2,
                    $exps: {
                      value: "$slot.record.price * $slot.record.quantity * $slot.record.taxRate / 1000",
                    }
                  }
                },
                {
                  type: 'auto',
                  code: 'id',
                  fieldName: 'id',
                  title: '金额',
                  width: '100px',
                  align: 'right',
                  rendererType: 'rapidNumberRenderer',
                  rendererProps: {
                    usingThousandSeparator: true,
                    decimalPlaces: 2,
                    $exps: {
                      value: "$slot.record.price * $slot.record.quantity",
                    }
                  }
                },
              ],
              actions: [
                {
                  $type: "sonicRecordActionEditEntity",
                  code: 'edit',
                  actionType: "edit",
                  actionText: '修改',
                },
                {
                  $type: "sonicRecordActionDeleteEntity",
                  code: 'delete',
                  actionType: 'delete',
                  actionText: '删除',
                  dataSourceCode: "list",
                  entityCode: "PmProjectLog",
                },
              ],
              newForm: cloneDeep(orderItemFormConfig),
              editForm: cloneDeep(orderItemFormConfig),
              footer: [
                {
                  $type: "antdAlert",
                  style: {
                    textAlign: 'right',
                  },
                  $exps: {
                    "_hidden": "!$scope.stores.list?.data",
                    "message": "$scope.stores.list ? '总金额：' + Intl.NumberFormat('Zh-cn').format(_.sumBy($scope.stores.list.data?.list, function (item) {return item.price * item.quantity})) : ''",
                  }
                },
              ],
              $exps: {
                "fixedFilters[0].filters[0].value": "$rui.parseQuery().id",
                "newForm.fixedFields.order_id": "$rui.parseQuery().id",
              },
            }
          ]
        },
        {
          key: "projects",
          label: "相关项目",
          children: [
            {
              $id: "orderList",
              $type: "sonicEntityList",
              entityCode: "PmProject",
              viewMode: "table",
              fixedFilters: [
                {
                  field: "orders",
                  operator: "exists",
                  filters: [
                    {
                      field: "id",
                      operator: "eq",
                      value: ""
                    }
                  ]
                }
              ],
              listActions: [
                {
                  $type: "sonicToolbarRefreshButton",
                  text: "刷新",
                  icon: "ReloadOutlined",
                },
              ],
              pageSize: -1,
              columns: [
                {
                  type: 'link',
                  code: 'code',
                  fixed: 'left',
                  width: '100px',
                  rendererProps: {
                    url: "/pages/pm_project_details?id={{id}}",
                  },
                },
                {
                  type: 'link',
                  code: 'name',
                  fixed: 'left',
                  width: '200px',
                  rendererProps: {
                    url: "/pages/pm_project_details?id={{id}}",
                  },
                },
                {
                  type: 'auto',
                  code: 'category',
                  fieldName: 'category.name',
                  width: '100px',
                },
                {
                  type: 'auto',
                  code: 'customer',
                  fieldName: 'customer.name',
                  width: '150px',
                },
                {
                  type: 'auto',
                  code: 'owner',
                  fieldName: 'owner.name',
                  width: '100px',
                },
                {
                  type: 'auto',
                  code: 'salesman',
                  fieldName: 'salesman.name',
                  width: '100px',
                },
                {
                  type: 'auto',
                  code: 'projectManager',
                  fieldName: 'projectManager.name',
                  width: '100px',
                },
                {
                  type: 'auto',
                  code: 'distributor',
                  fieldName: 'distributor.name',
                  width: '150px',
                },
                {
                  type: 'auto',
                  code: 'stage',
                  width: '100px',
                },
                {
                  type: 'auto',
                  code: 'state',
                  width: '100px',
                },
                {
                  type: 'auto',
                  code: 'createdAt',
                  width: '150px',
                },
              ],
              $exps: {
                "fixedFilters[0].filters[0].value": "$rui.parseQuery().id",
              },
            }
          ]
        },
        {
          key: "contracts",
          label: "相关合同",
          children: [
            {
              $id: "contractList",
              $type: "sonicEntityList",
              entityCode: "CbsContract",
              viewMode: "table",
              fixedFilters: [
                {
                  field: "orders",
                  operator: "exists",
                  filters: [
                    {
                      field: "id",
                      operator: "eq",
                      value: ""
                    }
                  ]
                }
              ],
              listActions: [
                {
                  $type: "sonicToolbarRefreshButton",
                  text: "刷新",
                  icon: "ReloadOutlined",
                },
              ],
              pageSize: -1,
              columns: [
                {
                  type: 'auto',
                  code: 'kind',
                  fixed: 'left',
                  width: '100px',
                },
                {
                  type: 'auto',
                  code: 'code',
                  fixed: 'left',
                  width: '100px',
                },
                {
                  type: 'link',
                  code: 'name',
                  fixed: 'left',
                  rendererProps: {
                    url: "/pages/cbs_contract_details?id={{id}}",
                  },
                },
                {
                  type: 'auto',
                  code: 'salesman',
                  fieldName: 'salesman.name',
                  width: '100px',
                },
                {
                  type: 'auto',
                  code: 'totalAmount',
                  width: '100px',
                  align: 'right',
                  rendererType: 'text',
                  rendererProps: {
                    $exps: {
                      text: "Intl.NumberFormat('Zh-cn').format($slot.value)"
                    }
                  }
                },
                {
                  type: 'auto',
                  code: 'state',
                  width: '100px',
                },
                {
                  type: 'auto',
                  code: 'createdAt',
                  width: '150px',
                },
              ],
              $exps: {
                "fixedFilters[0].filters[0].value": "$rui.parseQuery().id",
              },
            }
          ]
        },
        {
          key: "transactions",
          label: "收支记录",
          children: [
            {
              $id: "transactionList",
              $type: "sonicEntityList",
              entityCode: "FinTransaction",
              viewMode: "table",
              fixedFilters: [
                {
                  field: "order",
                  operator: "exists",
                  filters: [
                    {
                      field: "id",
                      operator: "eq",
                      value: ""
                    }
                  ]
                }
              ],
              listActions: [
                {
                  $type: "sonicToolbarRefreshButton",
                  text: "刷新",
                  icon: "ReloadOutlined",
                },
              ],
              orderBy: [
                {
                  field: "transferedAt",
                  desc: true,
                },
              ],
              pageSize: -1,
              columns: [
                {
                  type: 'auto',
                  code: 'code',
                  width: '100px',
                  fixed: 'left',
                },
                {
                  type: 'auto',
                  code: 'transferedAt',
                  width: '150px',
                  fixed: 'left',
                },
                {
                  type: 'auto',
                  code: 'account',
                  width: '150px',
                  fieldName: 'account.name'
                },
                {
                  type: 'auto',
                  code: 'type',
                  width: '80px',
                },
                {
                  type: 'auto',
                  code: 'amount',
                  width: '100px',
                  align: 'right',
                  rendererType: 'text',
                  rendererProps: {
                    $exps: {
                      text: "Intl.NumberFormat('Zh-cn').format($slot.value)"
                    },
                  },
                },
                {
                  type: 'auto',
                  code: 'description',
                },
                {
                  type: 'auto',
                  code: 'contract',
                  rendererType: "rapidLinkRenderer",
                  rendererProps: {
                    text: "{{code}} {{name}}",
                    url: "/pages/cbs_contract_details?id={{id}}",
                  },
                },
                {
                  type: 'auto',
                  code: 'state',
                  width: '100px',
                },
              ],
              $exps: {
                "fixedFilters[0].filters[0].value": "$rui.parseQuery().id",
              },
            }
          ]
        },
      ]
    }
  ],
};

export default page;
