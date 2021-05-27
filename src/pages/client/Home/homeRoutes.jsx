import { lazy } from 'react'
import { Route } from 'react-router-dom';

const HomePage = lazy(() => import("./HomePage"))

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
]

const HomeRoutes = () => (
    <>
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </>
);

export default HomeRoutes