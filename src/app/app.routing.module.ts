import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlankLayoutComponent } from './_layouts/blank-layout.component';
import { DefaultLayoutComponent } from './_layouts/default-layout.component';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    component: BlankLayoutComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: LandingPageComponent
      }
    ]
  },
  {
    path: 'admin',
    runGuardsAndResolvers: 'always',
    component: DefaultLayoutComponent,
    canActivate: [],
    children: [
      {
        path: 'portfolio',
        component: LandingPageComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [];
