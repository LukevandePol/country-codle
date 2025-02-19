import { Route } from '@angular/router';
import { HomeComponent} from '@angular-monorepo/home';
import { CountryCodesComponent} from '@angular-monorepo/country-codes';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'country-codes',
        component: CountryCodesComponent,
        pathMatch: 'full'
    },
    {
        path: 'country-flags',
        loadComponent : () => 
            import('@angular-monorepo/country-flags').then((m) => m.CountryFlagsComponent),
    },
    { path: '**', redirectTo: '' }

];
