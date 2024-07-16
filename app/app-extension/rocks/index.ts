import Link from "./link/Link";
import MaterialLabelRenderer from "./material-label-renderer/MaterialLabelRenderer";
import MrpSandTable from "./mrp-sand-table/MrpSandTable";
import MrpWorkOrderSandTable from "./mrp-work-order-sand-table/MrpWorkOrderSandTable";
import RapidRecordActionLink from "./rapid-record-action-link/RapidRecordActionLink";
import SectionSeparator from "./section-separator/SectionSeparator";
import ShopfloorAppBuilder from "./shopfloor-app-builder/ShopfloorAppBuilder";
import TestComponent from "./test";
import PrintTrigger from "./print-trigger/PrintTrigger";
import MultiplePrintTrigger from "./multiple-print-trigger/MultiplePrintTrigger";
import SonicRecordActionPrintEntity from "./sonic-record-action-print-entity/SonicRecordActionPrintEntity";
import CheckableTag from "./checkable-tag/CheckableTag";
import InspectionPrintRecordAction from "./inspection-print-record-action/InspectionPrintRecordAction";
import MergeBinNumAction from "./merge-bin-num-action/MergeBinNumAction";
import SplitBinNumAction from "./split-bin-num-action/SplitBinNumAction";
import BusinessForm from "./business-form/BusinessForm";
import BusinessTable from "./business-table/BusinessTable";
import MaterialLotNumSelector from "./material-lotnum-selector/MaterialLotNumSelector";
import InspectionInputSection from "./inspection-input-section/InspectionInputSection";
import BatchPrintAction from "./batch-print-action/BatchPrintAction";
import InventoryDetailViewer from "./inventory-detail-viewer";
import CheckRecordDetail from "./check-record-detail";

// inventory
import InventoryOperationForm from "./inventory-business/operation-form";
import InventoryApplicationForm from "./inventory-business/application-form";

// RichText
import RichTextEditor from "./rich-text-editor/RichTextEditor";
import RichTextDisplay from "./rich-text-editor/RichTextDisplay";

export default [
  Link,
  MaterialLabelRenderer,
  MrpSandTable,
  MrpWorkOrderSandTable,
  PrintTrigger,
  MultiplePrintTrigger,
  RapidRecordActionLink,
  TestComponent,
  SectionSeparator,
  ShopfloorAppBuilder,
  SonicRecordActionPrintEntity,
  CheckableTag,
  InspectionPrintRecordAction,
  MergeBinNumAction,
  SplitBinNumAction,
  BusinessForm,
  BusinessTable,
  MaterialLotNumSelector,
  InspectionInputSection,
  BatchPrintAction,
  InventoryDetailViewer,
  CheckRecordDetail,

  // inventory
  InventoryOperationForm,
  InventoryApplicationForm,

  // RichText
  RichTextEditor,
  RichTextDisplay,
];
