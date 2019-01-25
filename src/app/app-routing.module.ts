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

import { QuotationSelectionDetailsComponent } from './components/crm/crm-po/po-entry/po-entry-quotation-selection/quotation-selection-details/quotation-selection-details.component';
import { PoEntryEditSelectedProductComponent } from './components/crm/crm-po/po-entry/po-entry-edit-selected-product/po-entry-edit-selected-product.component';
import { SearchPipe } from './pipes/search.pipe';

const routes:Routes=[
  { path:'login',component:LoginComponent },

  { path:'crm/crmheader',component:CrmHeaderComponent },
  { path:'crm/crmfooter',component:CrmFooterComponent },
  { path:'crm/crm-home',component:CrmHomeComponent },

  { path:'crm/po-entry/customer-selection', component:PoEntryCustomerSelectionComponent },
  { path:'crm/po-entry/:customer/requester-selection',component: PoEntryRequesterSelectionComponent },
  { path:'crm/po-entry/:customer/:requester/receiver-selection',component: PoEntryReceiverSelectionComponent },
  { path:'crm/po-entry/:customer/:requester/:receiver/supportinginfo',component: PoEntrySupportingInfoComponent },
  { path:'crm/po-entry/quotation-selection-details', component:QuotationSelectionDetailsComponent },
  { path:'crm/po-entry/po-entry-edit-selected-product',component:PoEntryEditSelectedProductComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
