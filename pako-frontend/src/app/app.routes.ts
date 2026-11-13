import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { NovaEncomenda } from './pages/nova-encomenda/nova-encomenda';
import { SimularFrete } from './pages/simular-frete/simular-frete';
import { AppShell } from './layouts/app-shell/app-shell';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AppShell,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'nova-encomenda',
                component: NovaEncomenda
            },
            {
                path: 'simular-frete',
                component: SimularFrete
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
