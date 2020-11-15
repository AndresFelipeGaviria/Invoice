import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './tables/product/product.component';
import {HomeComponent} from './tables/home/home.component';
import {ClientComponent} from './tables/client/client.component';
import {AppComponent} from './app.component'

const routes: Routes = [
{path: 'Product', component: ProductComponent},
{path: 'Client', component: ClientComponent},
{path: 'Pay', component: HomeComponent},
{path: 'Purchase', component: HomeComponent},
{path: '**', pathMatch: 'full', redirectTo: 'Home'},
];

export const app_routing = RouterModule.forRoot(routes);

