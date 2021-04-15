import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const HomePage = lazy(() => import("./HomePage"))

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
]

export default () => (
    <>
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </>
);
