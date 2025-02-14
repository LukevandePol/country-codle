import { Route } from '@angular/router';
import { HomeComponent} from '@angular-monorepo/home';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'country-codes',
        loadComponent : () =>
            import('@angular-monorepo/country-codes').then((m) => m.CountryCodesComponent),
    },
    {
        path: 'country-flags',
        loadComponent : () => 
            import('@angular-monorepo/country-flags').then((m) => m.CountryFlagsComponent),
    }

];
