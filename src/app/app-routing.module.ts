import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AllComponent } from './components/all/all.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'address', component: AddressFormComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'table', component: TableComponent},
  {path: 'tree', component: TreeComponent},
  {path: 'all', component: AllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
