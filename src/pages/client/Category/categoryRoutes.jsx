import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const CategoriesPage = lazy(() => import("./CategoriesPage"))

const routes = [
    {
        exact: true,
        path: "/categories",
        component: CategoriesPage
    },
    {
        path: "/categories/medium",
        component: (() => <CategoriesPage medium />)
    },
    {
        path: "/categories/small",
        component: (() => <CategoriesPage small />)
    },
]

const CategoryRoutes = () => (
    <Suspense fallback="Product...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);

export default CategoryRoutes