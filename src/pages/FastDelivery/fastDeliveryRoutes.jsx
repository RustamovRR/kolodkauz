import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const FastDeliveryPage = lazy(() => import("./FastDeliveryPage"))

const routes = [
    {
        path: "/fast_delivery",
        exact: true,
        component: FastDeliveryPage
    },
]

export default () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);
