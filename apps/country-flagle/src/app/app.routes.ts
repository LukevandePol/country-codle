import { Route } from '@angular/router';
import { HomeComponent } from '@angular-monorepo/home';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'country-flags',
        loadComponent : () => 
            import('@angular-monorepo/country-flags').then((m) => m.CountryFlagsComponent),
    },
    { path: '**', redirectTo: '' }

];
