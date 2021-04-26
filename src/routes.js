import { lazy } from 'react'

const HomeRoutes = lazy(() => import("./pages/client/Home/homeRoutes"))
const InfoRoutes = lazy(() => import("./pages/client/Information/infoRoutes"))
const FavoriteRoutes = lazy(() => import("./pages/client/Favorite/favoriteRoutes"))
const CompareRoutes = lazy(() => import("./pages/client/Compare/compareRoutes"))
const BasketRoutes = lazy(() => import("./pages/client/Basket/basketRoutes"))
const CategoryRoutes = lazy(() => import("./pages/client/Category/categoryRoutes"))
const ProductInfoRoutes = lazy(() => import("./pages/client/ProductInfo/productInfoRoutes"))
const LoginRoutes = lazy(() => import("./pages/client/Login/loginRoutes"))
const RegisterRoutes = lazy(() => import("./pages/client/Register/registerRoutes"))
const FastDeliveryRoutes = lazy(() => import("./pages/client/FastDelivery/fastDeliveryRoutes"))

const AdminRoutes = lazy(() => import("./pages/admin/routes"))

const routes = [
    {
        path: "/",
        exact: true,
        component: HomeRoutes
    },
    {
        path: "/info",
        component: InfoRoutes
    },
    {
        path: "/favorite",
        component: FavoriteRoutes
    },
    {
        path: "/compare",
        component: CompareRoutes
    },
    {
        path: "/basket",
        component: BasketRoutes
    },
    {
        path: "/categories",
        component: CategoryRoutes
    },
    {
        path: "/product/:id",
        component: ProductInfoRoutes
    },
    {
        path: "/login",
        component: LoginRoutes
    },
    {
        path: "/register",
        component: RegisterRoutes
    },
    {
        path: "/fast_delivery",
        component: FastDeliveryRoutes
    },

    {
        path: "/admin",
        component: AdminRoutes,
    },
]

export default routes