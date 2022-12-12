import { Routes } from "@angular/router";
import { DetailPageComponent } from "./detail-page/detail-page.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { LogoutPageComponent } from "./logout-page/logout-page.component";
import { OverviewPageComponent } from "./overview-page/overview-page.component";

export const ROUTES: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'overview', component: OverviewPageComponent },
    { path: 'offer/:id', component: DetailPageComponent },
    { path: 'logout', component: LogoutPageComponent},
];
