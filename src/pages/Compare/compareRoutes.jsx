import { lazy, Suspense } from 'react'
import { Route } from 'react-router';

const ComparePage = lazy(() => import("./ComparePage"))

const routes = [
    {
        path: "/compare",
        exact: true,
        component: ComparePage
    },
]

export default () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);
