import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const ProductInfoPage = lazy(() => import("./ProductInfoPage"))

const routes = [
    {
        path: "/product_info",
        exact: true,
        component: ProductInfoPage
    },
]

export default () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);
