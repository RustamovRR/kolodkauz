import { lazy, Suspense } from 'react'
import { Route } from 'react-router';

const HomePage = lazy(() => import("./HomePage"))

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
]

export default () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);
