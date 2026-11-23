import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { NovaEncomenda } from './pages/nova-encomenda/nova-encomenda';
import { SimularFrete } from './pages/simular-frete/simular-frete';
import { AppShell } from './layouts/app-shell/app-shell';
import { Perfil } from './pages/perfil/perfil';
import { EntregasAgendadas } from './pages/entregas-agendadas/entregas-agendadas';
import { EntregasConcluidas } from './pages/entregas-concluidas/entregas-concluidas';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { RecuperarSenha } from './pages/recuperar-senha/recuperar-senha';


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
            {
                path: 'perfil',
                component: Perfil
            },
            {
                path: 'entregas-agendadas',
                component: EntregasAgendadas
            },
            {
                path: 'entregas-concluidas',
                component: EntregasConcluidas
            }
        ]
    },
    {
        path: '',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                component: Login
            }
        ]
    },
    {
        path: 'cadastro',
        component: Cadastro
    },
    {
        path: 'recuperar-senha',
        component: RecuperarSenha
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
