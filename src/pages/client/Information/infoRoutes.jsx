import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

const InformationPage = lazy(() => import("./InformationPage"))

const routes = [
    {
        exact: true,
        path: "/info",
        component: InformationPage
    },
    {
        path: "/info/how_to_order",
        component: (() => <InformationPage howToOrder />)
    },
    {
        path: "/info/delivery",
        component: (() => <InformationPage delivery />)
    },
    {
        path: "/info/delivery_to_apartment",
        component: (() => <InformationPage deliveryToApartment />)
    },
    {
        path: "/info/method_of_service",
        component: (() => <InformationPage methodOfService />)
    },
    {
        path: "/info/guaranty",
        component: (() => <InformationPage guaranty />)
    },
    {
        path: "/info/return_and_exchange",
        component: (() => <InformationPage returnAndExchange />)
    },
    {
        path: "/info/terms_of_use",
        component: (() => <InformationPage termsOfUse />)
    },
]

const InfoRoutes = () => (
    <Suspense fallback="loading...">
        {routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
        ))}
    </Suspense>
);

export default InfoRoutes