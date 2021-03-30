import { lazy } from 'react';

const KidPlayGround = lazy(() => import('./components/pages/kidPlayGround/KidPlayGround'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

export const Routes = [
    { id: '/', component: KidPlayGround, exact: true },
    { id: '*', component: NotFound }
];



