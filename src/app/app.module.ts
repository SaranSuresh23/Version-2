import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule  } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { CategoryComponent } from './pages/category/category.component';
import { BdescComponent } from './pages/bdesc/bdesc.component';

import { SdescComponent } from './pages/sdesc/sdesc.component';

import { PdescComponent } from './pages/pdesc/pdesc.component';
import { AdescComponent } from './pages/adesc/adesc.component';
import { AccountComponent } from './pages/account/account.component';

import { TdescComponent } from './pages/tdesc/tdesc.component';

import { FdescComponent } from './pages/fdesc/fdesc.component';

import { PldescComponent } from './pages/pldesc/pldesc.component';

import { StdescComponent } from './pages/stdesc/stdesc.component';
import { CartComponent } from './pages/cart/cart.component';
import { BillComponent } from './pages/bill/bill.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';


import { PaymentComponent } from './pages/payment/payment.component';
import { AddBonsaicategoryComponent } from './admin/add-bonsaicategory/add-bonsaicategory.component';
import { AddSeedscategoryComponent } from './admin/add-seedscategory/add-seedscategory.component';
import { AddPotscategoryComponent } from './admin/add-potscategory/add-potscategory.component';
import { AddAccessoriescategoryComponent } from './admin/add-accessoriescategory/add-accessoriescategory.component';
import { AddToolscategoryComponent } from './admin/add-toolscategory/add-toolscategory.component';
import { AddFertilizerscategoryComponent } from './admin/add-fertilizerscategory/add-fertilizerscategory.component';
import { AddPlantscategoryComponent } from './admin/add-plantscategory/add-plantscategory.component';
import { AddStandscategoryComponent } from './admin/add-standscategory/add-standscategory.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { Bonsai1Component } from './bonsai1/bonsai1.component';
import { Fertilizer1Component } from './fertilizer1/fertilizer1.component';
import { Seed1Component } from './seed1/seed1.component';
import { Plant1Component } from './plant1/plant1.component';
import { Pot1Component } from './pot1/pot1.component';
import { Tool1Component } from './tool1/tool1.component';
import { Accessories1Component } from './accessories1/accessories1.component';
import { Stand1Component } from './stand1/stand1.component';
import { Menu1Component } from './menu1/menu1.component';
import { AdminBosaiListComponent } from './admin/admin-bosaiList/admin-bosaiList.component';
import { AdminSeedListComponent } from './admin/admin-seedList/admin-seedList.component';
import { AdminPotListComponent } from './admin/admin-potList/admin-potList.component';
import { AdminAccessoriesListComponent } from './admin/admin-accessoriesList/admin-accessoriesList.component';
import { AdminToolListComponent } from './admin/admin-toolList/admin-toolList.component';
import { AdminFertilizerListComponent } from './admin/admin-fertilizerList/admin-fertilizerList.component';
import { AdminPlantListComponent } from './admin/admin-plantList/admin-plantList.component';
import { AdminStandListComponent } from './admin/admin-standList/admin-standList.component';
import { EditBonsaiComponent } from './admin/edit-bonsai/edit-bonsai.component';
import { EditSeedComponent } from './admin/edit-seed/edit-seed.component';
import { EditPotComponent } from './admin/edit-pot/edit-pot.component';
import { EditAccessoriesComponent } from './admin/edit-accessories/edit-accessories.component';
import { EditToolComponent } from './admin/edit-tool/edit-tool.component';
import { EditStandComponent } from './admin/edit-stand/edit-stand.component';
import { EditFertilizerComponent } from './admin/edit-fertilizer/edit-fertilizer.component';
import { EditPlantComponent } from './admin/edit-plant/edit-plant.component';
import { Cart1Component } from './cart1/cart1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Cart2Component } from './cart2/cart2.component';
import { Checkout2Component } from './checkout2/checkout2.component';
import { Payment1Component } from './payment1/payment1.component';






@NgModule({
  declarations: [		
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    CategoryComponent,

    BdescComponent,

    SdescComponent,

    PdescComponent,

    AdescComponent,
    AccountComponent,

    TdescComponent,

    FdescComponent,

    PldescComponent,

    StdescComponent,
    CartComponent,
    BillComponent,
    CheckoutComponent,
    LoginComponent,
    SignupComponent,
    PaymentComponent,
    AddBonsaicategoryComponent,
    AddSeedscategoryComponent,
    AddPotscategoryComponent,
    AddAccessoriescategoryComponent,
    AddToolscategoryComponent,
    AddFertilizerscategoryComponent,
    AddPlantscategoryComponent,
    AddStandscategoryComponent,
    AdminHomeComponent,
    AdminLoginComponent,
      Bonsai1Component,
      Fertilizer1Component,
      Seed1Component,
      Plant1Component,
      Pot1Component,
      Tool1Component,
      Accessories1Component,
      Stand1Component,
      Menu1Component,
      Stand1Component,
      Stand1Component,
      AdminBosaiListComponent,
      AdminSeedListComponent,
      AdminPotListComponent,
      AdminAccessoriesListComponent,
      AdminToolListComponent,
      AdminFertilizerListComponent,
      AdminPlantListComponent,
      AdminStandListComponent,
      EditBonsaiComponent,
      EditSeedComponent,
      EditPotComponent,
      EditAccessoriesComponent,
      EditToolComponent,
      EditStandComponent,
      EditFertilizerComponent,
      EditPlantComponent,
      Cart1Component,
      NavbarComponent,
      Cart2Component,
      Checkout2Component,
      Payment1Component,
  
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
