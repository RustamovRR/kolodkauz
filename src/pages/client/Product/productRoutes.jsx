import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const ProductsPage = lazy(() => import("./ProductsPage"))

const routes = [
    {
        exact: true,
        path: "/categories",
        component: ProductsPage
    },
    {
        path: "/categories/medium",
        component: (() => <ProductsPage medium />)
    },
    {
        path: "/categories/small",
        component: (() => <ProductsPage small />)
    },
]

export default () => (
    <Suspense fallback="Product...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);
