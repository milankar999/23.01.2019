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

const routes:Routes=[
  { path:'login',component:LoginComponent },

  { path:'crm/crmheader',component:CrmHeaderComponent },
  { path:'crm/crmfooter',component:CrmFooterComponent },
  { path:'crm/crm-home',component:CrmHomeComponent },

  { path:'crm/po-entry/customer-selection', component:PoEntryCustomerSelectionComponent },
  { path:'crm/po-entry/:customer/requester-selection',component: PoEntryRequesterSelectionComponent },
  { path:'crm/po-entry/:customer/:requester/receiver-selection',component: PoEntryReceiverSelectionComponent },
  { path:'crm/po-entry/:customer/:requester/:receiver/supportinginfo',component: PoEntrySupportingInfoComponent },
  { path:'crm/po-entry/quotation-selection', component:PoEntryQuotationSelectionComponent},
  {path :'crm/po-entry/production-selection', component:PoEntryProductSelectionComponent},
  {path :'crm/po-entry/quotation-selection-details',component:QuotationSelectionDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
