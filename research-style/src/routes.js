import { lazy } from 'react';

const PageDemo = lazy(() => import('./components/pages/Demo/PageDemo'));


export const Routes = [
    { id: '/page-demo', component: PageDemo, exact: true },
];



