import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const InformationPage = lazy(() => import("./InformationPage"))

const routes = [
    {
        // exact: true,
        path: "/info",
        component: InformationPage
    }
]

export default () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);
