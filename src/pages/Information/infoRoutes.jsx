import { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'

const InfoPage = lazy(() => import("./InformationPage"))

const routes = [
    {
        path: "/info",
        exact: true,
        component: InfoPage
    },
]

export default () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
)