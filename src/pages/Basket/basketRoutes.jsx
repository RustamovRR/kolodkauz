import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const BasketPage = lazy(() => import("./BasketPage"))

const routes = [
    {
        path: "/basket",
        exact: true,
        component: BasketPage
    },
]

export default () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);
