import { lazy } from 'react';

const PageDemo = lazy(() => import('./components/pages/Demo/PageDemo'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

export const Routes = [
    { id: '/', component: PageDemo, exact: true },
    {id: '*', component: NotFound}
];



