import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CrmComponent } from './components/crm/crm.component';
import { SourcingComponent } from './components/sourcing/sourcing.component';
import { SalesComponent } from './components/sales/sales.component';
import { CrmHeaderComponent } from './components/crm/crm-header/crm-header.component';
import { CrmFooterComponent } from './components/crm/crm-footer/crm-footer.component';
import { CrmPoComponent } from './components/crm/crm-po/crm-po.component';
import { PoEntryComponent } from './components/crm/crm-po/po-entry/po-entry.component';
import { PoTypeEntryComponent } from './components/crm/crm-po/po-entry/po-type-entry/po-type-entry.component';
import { PoEntryCustomerSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-customer-selection/po-entry-customer-selection.component';
import { PoEntryRequesterSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-requester-selection/po-entry-requester-selection.component';
import { PoEntryReceiverSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-receiver-selection/po-entry-receiver-selection.component';
import { PoEntrySupportingInfoComponent } from './components/crm/crm-po/po-entry/po-entry-supporting-info/po-entry-supporting-info.component';
import { CrmHomeComponent } from './components/crm/crm-home/crm-home.component';
import { PoEntryQuotationSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-quotation-selection/po-entry-quotation-selection.component';
import { QuotationSelectionDetailsComponent } from './components/crm/crm-po/po-entry/po-entry-quotation-selection/quotation-selection-details/quotation-selection-details.component';
import { PoEntryProductSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-product-selection/po-entry-product-selection.component';
import { PoEntrySelectedProductComponent } from './components/crm/crm-po/po-entry/po-entry-selected-product/po-entry-selected-product.component';
import { PoEntryEditSelectedProductComponent } from './components/crm/crm-po/po-entry/po-entry-edit-selected-product/po-entry-edit-selected-product.component';
import { SearchPipe } from './pipes/search.pipe';
import { SalesHeaderComponent } from './components/sales/sales-header/sales-header.component';
import { SalesFooterComponent } from './components/sales/sales-footer/sales-footer.component';
import { SalesHomeComponent } from './components/sales/sales-home/sales-home.component';
import { SalesPoComponent } from './components/sales/sales-po/sales-po.component';
import { PoApprovalComponent } from './components/sales/sales-po/po-approval/po-approval.component';
import { SalesPoApprovalListComponent } from './components/sales/sales-po/po-approval/sales-po-approval-list/sales-po-approval-list.component';
import { SalesPoApprovalDetailsComponent } from './components/sales/sales-po/po-approval/sales-po-approval-details/sales-po-approval-details.component';
import { SalesPoApprovalSupportInfoComponent } from './components/sales/sales-po/po-approval/sales-po-approval-support-info/sales-po-approval-support-info.component';
import { PoModificationComponent } from './components/crm/crm-po/po-modification/po-modification.component';
import { CrmPoRejectedListComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-list/crm-po-rejected-list.component';
import { CrmPoRejectedDetailsComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-details/crm-po-rejected-details.component';
import { CrmPoRejectedLineitemEditComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-lineitem-edit/crm-po-rejected-lineitem-edit.component';
import { CrmPoRejectedSuppinfoEditComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-suppinfo-edit/crm-po-rejected-suppinfo-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrmComponent,
    SourcingComponent,
    SalesComponent,
    CrmHeaderComponent,
    CrmFooterComponent,
    CrmPoComponent,
    PoEntryComponent,
    PoTypeEntryComponent,
    PoEntryCustomerSelectionComponent,
    PoEntryRequesterSelectionComponent,
    PoEntryReceiverSelectionComponent,
    PoEntrySupportingInfoComponent,
    CrmHomeComponent,
    PoEntryQuotationSelectionComponent,
    QuotationSelectionDetailsComponent,
    PoEntryProductSelectionComponent,
    PoEntrySelectedProductComponent,
    PoEntryEditSelectedProductComponent,
    SearchPipe,
    SalesHeaderComponent,
    SalesFooterComponent,
    SalesHomeComponent,
    SalesPoComponent,
    PoApprovalComponent,
    SalesPoApprovalListComponent,
    SalesPoApprovalDetailsComponent,
    SalesPoApprovalSupportInfoComponent,
    PoModificationComponent,
    CrmPoRejectedListComponent,
    CrmPoRejectedDetailsComponent,
    CrmPoRejectedLineitemEditComponent,
    CrmPoRejectedSuppinfoEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }