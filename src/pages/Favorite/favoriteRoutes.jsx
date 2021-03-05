import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const FavoritePage = lazy(() => import("./FavoritePage"))

const routes = [
    {
        path: "/favorite",
        exact: true,
        component: FavoritePage
    },
]

export default () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);
