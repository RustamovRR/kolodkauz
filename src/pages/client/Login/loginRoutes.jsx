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

const LoginRoutes = () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);

export default LoginRoutes