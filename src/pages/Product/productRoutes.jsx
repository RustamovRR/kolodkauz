import { lazy, Suspense } from 'react'
import { Route } from 'react-router';

const ProductsPage = lazy(() => import("./ProductsPage"))

const routes = [
    {
        path: "/products",
        exact: true,
        component: ProductsPage
    },
]

export default () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);
