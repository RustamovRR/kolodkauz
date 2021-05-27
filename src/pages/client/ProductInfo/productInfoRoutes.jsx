import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const ProductInfoPage = lazy(() => import("./ProductInfoPage"))

const routes = [
    {
        path: "/product/:slug",
        exact: true,
        component: ProductInfoPage
    },
]

const ProductInfoRoutes = () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);

export default ProductInfoRoutes