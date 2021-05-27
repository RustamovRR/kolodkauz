import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const ComparePage = lazy(() => import("./ComparePage"))

const routes = [
    {
        path: "/compare",
        exact: true,
        component: ComparePage
    },
]

const CompareRoutes = () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);

export default CompareRoutes