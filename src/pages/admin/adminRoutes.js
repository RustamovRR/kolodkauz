import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const AdminHome = lazy(() => import("./AdminHome"))

const routes = [
    {
        path: "/admin",
        exact: true,
        component: AdminHome
    },
]

const AdminRoutes = () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);

export default AdminRoutes