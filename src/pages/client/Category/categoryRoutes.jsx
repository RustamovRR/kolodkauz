import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const CategoriesPage = lazy(() => import("./CategoriesPage"))

const routes = [
    // {
    //     exact: true,
    //     path: "/categories",
    //     component: CategoriesPage
    // },
    {
        exact: true,
        path: "/categories/:category",
        component: CategoriesPage
    },
    {
        path: "/categories/:category/medium",
        component: (() => <CategoriesPage medium />)
    },
    {
        path: "/categories/:category/small",
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