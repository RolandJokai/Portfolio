import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSiteComponent } from './hero-site/hero-site.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:"hero-site",component:HeroSiteComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"contact",component:ContactComponent},

  {path:"",redirectTo:"/hero-site",pathMatch:"full"},

  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
