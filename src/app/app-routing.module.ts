import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { CategoryComponent } from './pages/category/category.component';
import { CartComponent } from './pages/cart/cart.component';

import { BdescComponent } from './pages/bdesc/bdesc.component';
import { SdescComponent } from './pages/sdesc/sdesc.component';
import { PdescComponent } from './pages/pdesc/pdesc.component';
import { AdescComponent } from './pages/adesc/adesc.component';

import { TdescComponent } from './pages/tdesc/tdesc.component';

import { FdescComponent } from './pages/fdesc/fdesc.component';
import { PldescComponent } from './pages/pldesc/pldesc.component';

import { StdescComponent } from './pages/stdesc/stdesc.component';
import { AccountComponent } from './pages/account/account.component';
import { BillComponent } from './pages/bill/bill.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddAccessoriescategoryComponent } from './admin/add-accessoriescategory/add-accessoriescategory.component';
import { AddBonsaicategoryComponent } from './admin/add-bonsaicategory/add-bonsaicategory.component';
import { AddFertilizerscategoryComponent } from './admin/add-fertilizerscategory/add-fertilizerscategory.component';
import { AddPlantscategoryComponent } from './admin/add-plantscategory/add-plantscategory.component';
import { AddPotscategoryComponent } from './admin/add-potscategory/add-potscategory.component';
import { AddSeedscategoryComponent } from './admin/add-seedscategory/add-seedscategory.component';
import { AddStandscategoryComponent } from './admin/add-standscategory/add-standscategory.component';
import { AddToolscategoryComponent } from './admin/add-toolscategory/add-toolscategory.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { Bonsai1Component } from './bonsai1/bonsai1.component';
import { Fertilizer1Component } from './fertilizer1/fertilizer1.component';
import { Seed1Component } from './seed1/seed1.component';
import { Plant1Component } from './plant1/plant1.component';
import { Accessories1Component } from './accessories1/accessories1.component';
import { Stand1Component } from './stand1/stand1.component';
import { Tool1Component } from './tool1/tool1.component';
import { Pot1Component } from './pot1/pot1.component';
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
import { EditPlantComponent } from './admin/edit-plant/edit-plant.component';
import { EditFertilizerComponent } from './admin/edit-fertilizer/edit-fertilizer.component';
import { Cart1Component } from './cart1/cart1.component';
import { AuthGuard } from './auth.guard';
import { AuthUserGuard } from './auth-user.guard';
import { Cart2Component } from './cart2/cart2.component';
import { Payment1Component } from './payment1/payment1.component';
import { PaymentComponent } from './pages/payment/payment.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'category',component:CategoryComponent},
  {path:'cart',component:CartComponent},

  {path:'bonsai/:id',component:BdescComponent},

  {path:'seed/:id',component:SdescComponent},

  {path:'pots/:id',component:PdescComponent},

  {path:'accessories/:id',component:AdescComponent},

  {path:'tools/:id',component:TdescComponent},

  {path:'fertilizers/:id',component:FdescComponent},

  {path:'plants/:id',component:PldescComponent},

  {path:'stands/:id',component:StdescComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'account',component:AccountComponent},
  {path:'bill',component:BillComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  
  {path:'admin/add-accessories',component:AddAccessoriescategoryComponent,canActivate:[AuthGuard]},
  {path:'admin/add-bonsai',component:AddBonsaicategoryComponent,canActivate:[AuthGuard]},
  {path:'admin/add-fertilizer',component:AddFertilizerscategoryComponent,canActivate:[AuthGuard]},
  {path:'admin/add-plant',component:AddPlantscategoryComponent,canActivate:[AuthGuard]},
  {path:'admin/add-pot',component:AddPotscategoryComponent,canActivate:[AuthGuard]},
  {path:'admin/add-seed',component:AddSeedscategoryComponent,canActivate:[AuthGuard]},
  {path:'admin/add-stand',component:AddStandscategoryComponent,canActivate:[AuthGuard]},
  {path:'admin/add-tool',component:AddToolscategoryComponent,canActivate:[AuthGuard]},
  {path:'ad-home',component:AdminHomeComponent,canActivate:[AuthGuard]},
  {path:'ad-login',component:AdminLoginComponent},
  {path:'bonsai1',component:Bonsai1Component,canActivate:[AuthUserGuard]},
  {path:'fertilizer1',component:Fertilizer1Component},
  {path:'seed1',component:Seed1Component},
  {path:'plant1',component:Plant1Component},
  {path:'stand1',component:Stand1Component},
  {path:'accessories1',component:Accessories1Component},
  {path:'tool1',component:Tool1Component},
  {path:'pot1',component:Pot1Component},
  {path:'stdesc/:standId',component:StdescComponent},
  {path:'bdesc/:bonsaiId',component:BdescComponent},
  {path:'sdesc/:seedId',component:SdescComponent},
  {path:'pdesc/:potId',component:PdescComponent},
  {path:'adesc/:accessoriesId',component:AdescComponent},
  {path:'tdesc/:toolId',component:TdescComponent},
  {path:'fdesc/:fertilizerId',component:FdescComponent},
  {path:'pldesc/:plantId',component:PdescComponent},
  {path:'admin/bonsaiList',component:AdminBosaiListComponent,canActivate:[AuthGuard]},
  {path:'admin/home',component:AdminHomeComponent,canActivate:[AuthGuard]},
  {path:'admin/seedList',component:AdminSeedListComponent,canActivate:[AuthGuard]},
  {path:'admin/potList',component:AdminPotListComponent,canActivate:[AuthGuard]},
  {path:'admin/accessoriesList',component:AdminAccessoriesListComponent,canActivate:[AuthGuard]},
  {path:'admin/toolList',component:AdminToolListComponent,canActivate:[AuthGuard]},
  {path:'admin/fertilizerList',component:AdminFertilizerListComponent,canActivate:[AuthGuard]},
  {path:'admin/plantList',component:AdminPlantListComponent,canActivate:[AuthGuard]},
  {path:'admin/standList',component:AdminStandListComponent,canActivate:[AuthGuard]},
  {path:'admin/editbonsai/:id',component:EditBonsaiComponent,canActivate:[AuthGuard]},
  {path:'admin/editseed/:id',component:EditSeedComponent,canActivate:[AuthGuard]},
  {path:'admin/editpot/:id',component:EditPotComponent,canActivate:[AuthGuard]},
  {path:'admin/editaccessories/:id',component:EditAccessoriesComponent,canActivate:[AuthGuard]},
  {path:'admin/edittool/:id',component:EditToolComponent,canActivate:[AuthGuard]},
  {path:'admin/editstand/:id',component:EditStandComponent,canActivate:[AuthGuard]},
  {path:'admin/editplant/:id',component:EditPlantComponent,canActivate:[AuthGuard]},
  {path:'admin/editfertilizer/:id',component:EditFertilizerComponent,canActivate:[AuthGuard]},
  {path:'cart1',component:Cart1Component,canActivate:[AuthUserGuard]},
  {path:'cart2',component:Cart2Component,canActivate:[AuthUserGuard]},
  {path:'checkout2',component:CheckoutComponent,canActivate:[AuthUserGuard]},
  {path:'payment1',component:Payment1Component},
  {path:'payment',component:PaymentComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
