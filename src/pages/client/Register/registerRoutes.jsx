import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const RegisterPage = lazy(() => import("./RegisterPage"))

const routes = [
    {
        path: "/register",
        exact: true,
        component: RegisterPage
    },
]

export default () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);
