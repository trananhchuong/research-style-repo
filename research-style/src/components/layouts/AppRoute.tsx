import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from '../../routes';
import Loading from '../loading/Loading';
import NotFound from '../pages/NotFound';

function AppRoute(props: any) {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                {
                    Routes.map((route) => {
                        const { id, component, exact } = route;
                        return (
                            <Route
                                key={id}
                                exact={exact}
                                path={id}
                                component={component}
                            />
                        );
                    })
                }
                <Route path={'*'} component={NotFound} />
            </Switch>
        </Suspense>
    );
}

export default AppRoute;
