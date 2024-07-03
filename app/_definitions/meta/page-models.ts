import type { RapidPage as TRapidPage } from '@ruiapp/rapid-extension';
import AppNavItemListPage from '../models/pages/AppNavItemListPage';
import BaseEmployeeListPage from '../models/pages/BaseEmployeeListPage';
import BaseFormFieldListPage from '../models/pages/BaseFormFieldListPage';
import BaseLocationListPage from '../models/pages/BaseLocationListPage';
import BaseMaterialCategoryListPage from '../models/pages/BaseMaterialCategoryListPage';
import BaseMaterialDetailsPage from '../models/pages/BaseMaterialDetailsPage';
import BaseMaterialListPage from '../models/pages/BaseMaterialListPage';
import BasePartnerCategoryListPage from '../models/pages/BasePartnerCategoryListPage';
import BasePartnerListPage from '../models/pages/BasePartnerListPage';
import BaseUnitListPage from '../models/pages/BaseUnitListPage';
import CbsContractDetailsPage from '../models/pages/CbsContractDetailsPage';
import CbsContractListPage from '../models/pages/CbsContractListPage';
import CbsContractRelationKindListPage from '../models/pages/CbsContractRelationKindListPage';
import CbsOrderDetailsPage from '../models/pages/CbsOrderDetailsPage';
import CbsOrderListPage from '../models/pages/CbsOrderListPage';
import DataDictionaryListPage from '../models/pages/DataDictionaryListPage';
import FinAccountListPage from '../models/pages/FinAccountListPage';
import FinBusinessCategoryListPage from '../models/pages/FinBusinessCategoryListPage';
import FinExpenseCategoryListPage from '../models/pages/FinExpenseCategoryListPage';
import FinTransactionListPage from '../models/pages/FinTransactionListPage';
import MetaModelDetailsPage from '../models/pages/MetaModelDetailsPage';
import MetaModelListPage from '../models/pages/MetaModelListPage';
import MetaRouteListPage from '../models/pages/MetaRouteListPage';
import MomGoodListPage from '../models/pages/MomGoodListPage';
import MomGoodLocationListPage from '../models/pages/MomGoodLocationListPage';
import MomInventoryApplicationDetailsPage from '../models/pages/MomInventoryApplicationDetailsPage';
import MomInventoryApplicationListPage from '../models/pages/MomInventoryApplicationListPage';
import MomInventoryBusinessTypeListPage from '../models/pages/MomInventoryBusinessTypeListPage';
import MomInventoryInOperationDetailsPage from '../models/pages/MomInventoryInOperationDetailsPage';
import MomInventoryListPage from '../models/pages/MomInventoryListPage';
import MomInventoryNormalOperationDetailsPage from '../models/pages/MomInventoryNormalOperationDetailsPage';
import MomInventoryNormalOperationListPage from '../models/pages/MomInventoryNormalOperationListPage';
import MomInventoryOperationListPage from '../models/pages/MomInventoryOperationListPage';
import MomInventoryOutOperationDetailsPage from '../models/pages/MomInventoryOutOperationDetailsPage';
import MomInventorySearchListPage from '../models/pages/MomInventorySearchListPage';
import MomInventoryStatTableListPage from '../models/pages/MomInventoryStatTableListPage';
import MomInventoryStatTriggerListPage from '../models/pages/MomInventoryStatTriggerListPage';
import MomMaterialInventoryBalanceListPage from '../models/pages/MomMaterialInventoryBalanceListPage';
import MomMaterialInventoryListPage from '../models/pages/MomMaterialInventoryListPage';
import MomMaterialLotInventoryListPage from '../models/pages/MomMaterialLotInventoryListPage';
import MomMaterialLotListPage from '../models/pages/MomMaterialLotListPage';
import MomMpsDetailsPage from '../models/pages/MomMpsDetailsPage';
import MomMpsListPage from '../models/pages/MomMpsListPage';
import MomMrpDetailsPage from '../models/pages/MomMrpDetailsPage';
import MomMrpListPage from '../models/pages/MomMrpListPage';
import MomPrintTemplateListPage from '../models/pages/MomPrintTemplateListPage';
import MomProcessCategoryListPage from '../models/pages/MomProcessCategoryListPage';
import MomProcessListPage from '../models/pages/MomProcessListPage';
import MomProdTaskDetailsPage from '../models/pages/MomProdTaskDetailsPage';
import MomProdTaskListPage from '../models/pages/MomProdTaskListPage';
import MomWarehouseListPage from '../models/pages/MomWarehouseListPage';
import MomWarehouseStrategyListPage from '../models/pages/MomWarehouseStrategyListPage';
import MomWorkOrderDetailsPage from '../models/pages/MomWorkOrderDetailsPage';
import MomWorkOrderListPage from '../models/pages/MomWorkOrderListPage';
import OcDepartmentListPage from '../models/pages/OcDepartmentListPage';
import OcRoleDetailsPage from '../models/pages/OcRoleDetailsPage';
import OcRoleListPage from '../models/pages/OcRoleListPage';
import OcUserListPage from '../models/pages/OcUserListPage';
import ShopfloorAppDetailsPage from '../models/pages/ShopfloorAppDetailsPage';
import ShopfloorAppListPage from '../models/pages/ShopfloorAppListPage';
import ShopfloorDisplayDeviceListPage from '../models/pages/ShopfloorDisplayDeviceListPage';
import ShopfloorStationListPage from '../models/pages/ShopfloorStationListPage';
import account$AccountChangePasswordPage from '../models/pages/account/AccountChangePasswordPage';
import account$AccountProfilePage from '../models/pages/account/AccountProfilePage';
import bpm$BpmCcToMeApplicationListPage from '../models/pages/bpm/BpmCcToMeApplicationListPage';
import bpm$BpmInstanceDetailsPage from '../models/pages/bpm/BpmInstanceDetailsPage';
import bpm$BpmMyFinishedApprovalListPage from '../models/pages/bpm/BpmMyFinishedApprovalListPage';
import bpm$BpmMyInitiatedApplicationListPage from '../models/pages/bpm/BpmMyInitiatedApplicationListPage';
import bpm$BpmMyPendingApprovalListPage from '../models/pages/bpm/BpmMyPendingApprovalListPage';
import bpm$BpmProcessListPage from '../models/pages/bpm/BpmProcessListPage';
import inspection$MomInspectionCategoryListPage from '../models/pages/inspection/MomInspectionCategoryListPage';
import inspection$MomInspectionCharacteristicCategoryListPage from '../models/pages/inspection/MomInspectionCharacteristicCategoryListPage';
import inspection$MomInspectionCharacteristicListPage from '../models/pages/inspection/MomInspectionCharacteristicListPage';
import inspection$MomInspectionDefectCategoryListPage from '../models/pages/inspection/MomInspectionDefectCategoryListPage';
import inspection$MomInspectionDefectListPage from '../models/pages/inspection/MomInspectionDefectListPage';
import inspection$MomInspectionInputPage from '../models/pages/inspection/MomInspectionInputPage';
import inspection$MomInspectionInstrumentCategoryListPage from '../models/pages/inspection/MomInspectionInstrumentCategoryListPage';
import inspection$MomInspectionInstrumentListPage from '../models/pages/inspection/MomInspectionInstrumentListPage';
import inspection$MomInspectionMethodListPage from '../models/pages/inspection/MomInspectionMethodListPage';
import inspection$MomInspectionRuleDetailPage from '../models/pages/inspection/MomInspectionRuleDetailPage';
import inspection$MomInspectionRuleListPage from '../models/pages/inspection/MomInspectionRuleListPage';
import inspection$MomInspectionSheetDetailsPage from '../models/pages/inspection/MomInspectionSheetDetailsPage';
import inspection$MomInspectionSheetListPage from '../models/pages/inspection/MomInspectionSheetListPage';
import pm$PmProjectCategoryListPage from '../models/pages/pm/PmProjectCategoryListPage';
import pm$PmProjectDetailsPage from '../models/pages/pm/PmProjectDetailsPage';
import pm$PmProjectEventListPage from '../models/pages/pm/PmProjectEventListPage';
import pm$PmProjectListPage from '../models/pages/pm/PmProjectListPage';
import pm$PmProjectSettingsPage from '../models/pages/pm/PmProjectSettingsPage';
import pm$PmProjectWorkItemTypeSettingsPage from '../models/pages/pm/PmProjectWorkItemTypeSettingsPage';
import pm$PmWorkItemDetailsPage from '../models/pages/pm/PmWorkItemDetailsPage';
import pm$PmWorkItemListPage from '../models/pages/pm/PmWorkItemListPage';
import pm$PmWorkItemResolutionListPage from '../models/pages/pm/PmWorkItemResolutionListPage';
import pm$PmWorkItemTypeDetailsPage from '../models/pages/pm/PmWorkItemTypeDetailsPage';
import pm$PmWorkItemTypeListPage from '../models/pages/pm/PmWorkItemTypeListPage';
import sys$SysActionListPage from '../models/pages/sys/SysActionListPage';
import sys$SysPrinterListPage from '../models/pages/sys/SysPrinterListPage';
import sys$SysSubSystemListPage from '../models/pages/sys/SysSubSystemListPage';
import sys$SysWebhookListPage from '../models/pages/sys/SysWebhookListPage';

export default [
  AppNavItemListPage,
  BaseEmployeeListPage,
  BaseFormFieldListPage,
  BaseLocationListPage,
  BaseMaterialCategoryListPage,
  BaseMaterialDetailsPage,
  BaseMaterialListPage,
  BasePartnerCategoryListPage,
  BasePartnerListPage,
  BaseUnitListPage,
  CbsContractDetailsPage,
  CbsContractListPage,
  CbsContractRelationKindListPage,
  CbsOrderDetailsPage,
  CbsOrderListPage,
  DataDictionaryListPage,
  FinAccountListPage,
  FinBusinessCategoryListPage,
  FinExpenseCategoryListPage,
  FinTransactionListPage,
  MetaModelDetailsPage,
  MetaModelListPage,
  MetaRouteListPage,
  MomGoodListPage,
  MomGoodLocationListPage,
  MomInventoryApplicationDetailsPage,
  MomInventoryApplicationListPage,
  MomInventoryBusinessTypeListPage,
  MomInventoryInOperationDetailsPage,
  MomInventoryListPage,
  MomInventoryNormalOperationDetailsPage,
  MomInventoryNormalOperationListPage,
  MomInventoryOperationListPage,
  MomInventoryOutOperationDetailsPage,
  MomInventorySearchListPage,
  MomInventoryStatTableListPage,
  MomInventoryStatTriggerListPage,
  MomMaterialInventoryBalanceListPage,
  MomMaterialInventoryListPage,
  MomMaterialLotInventoryListPage,
  MomMaterialLotListPage,
  MomMpsDetailsPage,
  MomMpsListPage,
  MomMrpDetailsPage,
  MomMrpListPage,
  MomPrintTemplateListPage,
  MomProcessCategoryListPage,
  MomProcessListPage,
  MomProdTaskDetailsPage,
  MomProdTaskListPage,
  MomWarehouseListPage,
  MomWarehouseStrategyListPage,
  MomWorkOrderDetailsPage,
  MomWorkOrderListPage,
  OcDepartmentListPage,
  OcRoleDetailsPage,
  OcRoleListPage,
  OcUserListPage,
  ShopfloorAppDetailsPage,
  ShopfloorAppListPage,
  ShopfloorDisplayDeviceListPage,
  ShopfloorStationListPage,
  account$AccountChangePasswordPage,
  account$AccountProfilePage,
  bpm$BpmCcToMeApplicationListPage,
  bpm$BpmInstanceDetailsPage,
  bpm$BpmMyFinishedApprovalListPage,
  bpm$BpmMyInitiatedApplicationListPage,
  bpm$BpmMyPendingApprovalListPage,
  bpm$BpmProcessListPage,
  inspection$MomInspectionCategoryListPage,
  inspection$MomInspectionCharacteristicCategoryListPage,
  inspection$MomInspectionCharacteristicListPage,
  inspection$MomInspectionDefectCategoryListPage,
  inspection$MomInspectionDefectListPage,
  inspection$MomInspectionInputPage,
  inspection$MomInspectionInstrumentCategoryListPage,
  inspection$MomInspectionInstrumentListPage,
  inspection$MomInspectionMethodListPage,
  inspection$MomInspectionRuleDetailPage,
  inspection$MomInspectionRuleListPage,
  inspection$MomInspectionSheetDetailsPage,
  inspection$MomInspectionSheetListPage,
  pm$PmProjectCategoryListPage,
  pm$PmProjectDetailsPage,
  pm$PmProjectEventListPage,
  pm$PmProjectListPage,
  pm$PmProjectSettingsPage,
  pm$PmProjectWorkItemTypeSettingsPage,
  pm$PmWorkItemDetailsPage,
  pm$PmWorkItemListPage,
  pm$PmWorkItemResolutionListPage,
  pm$PmWorkItemTypeDetailsPage,
  pm$PmWorkItemTypeListPage,
  sys$SysActionListPage,
  sys$SysPrinterListPage,
  sys$SysSubSystemListPage,
  sys$SysWebhookListPage,
] as TRapidPage[];
