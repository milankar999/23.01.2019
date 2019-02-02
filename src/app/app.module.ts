import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './guards/auth.guard';

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
import { SourcingHeaderComponent } from './components/sourcing/sourcing-header/sourcing-header.component';
import { SourcingFooterComponent } from './components/sourcing/sourcing-footer/sourcing-footer.component';
import { SourcingHomeComponent } from './components/sourcing/sourcing-home/sourcing-home.component';
import { SourcingPoComponent } from './components/sourcing/sourcing-po/sourcing-po.component';
import { SourcingCpoPendingListComponent } from './components/sourcing/sourcing-po/sourcing-cpo-pending-list/sourcing-cpo-pending-list.component';
import { SourcingCpoPendingDetailsComponent } from './components/sourcing/sourcing-po/sourcing-cpo-pending-details/sourcing-cpo-pending-details.component';
import { SourcingCpoVendorProductComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-cpo-vendor-product.component';
import { SourcingCpoLineitemEditComponent } from './components/sourcing/sourcing-po/sourcing-cpo-lineitem-edit/sourcing-cpo-lineitem-edit.component';
import { SourcingCpoVendorSelectionComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-selection/sourcing-cpo-vendor-selection.component';
import { SourcingCpoNewVendorComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-selection/sourcing-cpo-new-vendor/sourcing-cpo-new-vendor.component';
import { SourcingVpoAddBasicInfoComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-add-basic-info/sourcing-vpo-add-basic-info.component';
import { SourcingVpoAddContactpersonInfoComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-add-contactperson-info/sourcing-vpo-add-contactperson-info.component';
import { SourcingVpoCheckVendorInfoComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-check-vendor-info/sourcing-vpo-check-vendor-info.component';
import { SourcingVpoTermsConditionsComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-terms-conditions/sourcing-vpo-terms-conditions.component';
import { SourcingVpoDeliveryInstructionComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-delivery-instruction/sourcing-vpo-delivery-instruction.component';
import { SourcingVpoRequesterInfoComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-requester-info/sourcing-vpo-requester-info.component';
import { SourcingVpoReceiverInfoComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-receiver-info/sourcing-vpo-receiver-info.component';

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
    SourcingHeaderComponent,
    SourcingFooterComponent,
    SourcingHomeComponent,
    SourcingPoComponent,
    SourcingCpoPendingListComponent,
    SourcingCpoPendingDetailsComponent,
    SourcingCpoVendorProductComponent,
    SourcingCpoLineitemEditComponent,
    SourcingCpoVendorSelectionComponent,
    SourcingCpoNewVendorComponent,
    SourcingVpoAddBasicInfoComponent,
    SourcingVpoAddContactpersonInfoComponent,
    SourcingVpoCheckVendorInfoComponent,
    SourcingVpoTermsConditionsComponent,
    SourcingVpoDeliveryInstructionComponent,
    SourcingVpoRequesterInfoComponent,
    SourcingVpoReceiverInfoComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
