import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CrmHeaderComponent } from './components/crm/crm-header/crm-header.component';
import { PoEntryCustomerSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-customer-selection/po-entry-customer-selection.component';
import { CrmHomeComponent } from './components/crm/crm-home/crm-home.component';
import { PoEntryReceiverSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-receiver-selection/po-entry-receiver-selection.component';
import { PoEntryRequesterSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-requester-selection/po-entry-requester-selection.component';
import { PoEntrySupportingInfoComponent } from './components/crm/crm-po/po-entry/po-entry-supporting-info/po-entry-supporting-info.component';
import { CrmFooterComponent } from './components/crm/crm-footer/crm-footer.component';

import { PoEntryQuotationSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-quotation-selection/po-entry-quotation-selection.component';
import { PoEntryProductSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-product-selection/po-entry-product-selection.component';
import { QuotationSelectionDetailsComponent } from './components/crm/crm-po/po-entry/po-entry-quotation-selection/quotation-selection-details/quotation-selection-details.component';
import { PoEntrySelectedProductComponent } from './components/crm/crm-po/po-entry/po-entry-selected-product/po-entry-selected-product.component';
import { PoEntryEditSelectedProductComponent } from './components/crm/crm-po/po-entry/po-entry-edit-selected-product/po-entry-edit-selected-product.component';
import { CrmPoRejectedLineitemEditComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-lineitem-edit/crm-po-rejected-lineitem-edit.component';
import { SalesPoApprovalSupportInfoComponent } from './components/sales/sales-po/po-approval/sales-po-approval-support-info/sales-po-approval-support-info.component';


import { SalesPoApprovalListComponent } from './components/sales/sales-po/po-approval/sales-po-approval-list/sales-po-approval-list.component';
import { CrmPoRejectedListComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-list/crm-po-rejected-list.component';
import { CrmPoRejectedSuppinfoEditComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-suppinfo-edit/crm-po-rejected-suppinfo-edit.component';
import { SearchPipe } from './pipes/search.pipe';
import { SalesFooterComponent } from './components/sales/sales-footer/sales-footer.component';
import { SalesPoApprovalDetailsComponent } from './components/sales/sales-po/po-approval/sales-po-approval-details/sales-po-approval-details.component';
import { CrmPoRejectedDetailsComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-details/crm-po-rejected-details.component';

const routes:Routes=[
  { path:'login',component:LoginComponent },
//Po Creation/Entry
  { path:'crm/po-entry/customer-selection', component:PoEntryCustomerSelectionComponent },
  { path:'crm/po-entry/:customer/requester-selection',component: PoEntryRequesterSelectionComponent },
  { path:'crm/po-entry/:customer/:requester/receiver-selection',component: PoEntryReceiverSelectionComponent },
  { path:'crm/po-entry/:customer/:requester/:receiver/supportinginfo',component: PoEntrySupportingInfoComponent },
  { path:'crm/po-entry/quotation-selection', component:PoEntryQuotationSelectionComponent},
  { path:'crm/po-entry/production-selection', component:PoEntryProductSelectionComponent},
  { path:'crm/po-entry/quotation-selection-details',component:QuotationSelectionDetailsComponent},
  { path:'crm/po-entry/po-entry-edit-selected-product',component:PoEntryEditSelectedProductComponent},
  { path:'crm/po-entry/po-entry-selected-product',component:PoEntrySelectedProductComponent},
//PO Approval
  { path:'sales/sales-po/sales-po-approval-list',component:SalesPoApprovalListComponent},
  { path:'sales/sales-po/sales-po-approval-details' ,component:SalesPoApprovalDetailsComponent},
  { path:'sales-po/po-approval/sales-po-approval-support-info', component:SalesPoApprovalSupportInfoComponent},
//Rejected PO Modification
  { path:'crm/crm-po/po-modification/crm-po-rejected-list',component:CrmPoRejectedListComponent},
  { path:'crm/crm-po/po-mdification/crm-po-rejected-details', component:CrmPoRejectedDetailsComponent},
  { path:'crm/crm-po/po-modification/crm-po-rejected-supporting-edit',component:CrmPoRejectedSuppinfoEditComponent},
  { path:'crm/po-modification/crm-po-rejected-lineitem-edit', component:CrmPoRejectedLineitemEditComponent},
//      
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
