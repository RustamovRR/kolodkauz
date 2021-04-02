import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const LoginPage = lazy(() => import("./LoginPage"))

const routes = [
    {
        path: "/login",
        exact: true,
        component: LoginPage
    },
]

export default () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);
