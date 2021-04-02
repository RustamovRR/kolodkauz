import { lazy } from 'react'

const HomeRoutes = lazy(() => import("./pages/client/Home/homeRoutes"))
const InfoRoutes = lazy(() => import("./pages/client/Information/infoRoutes"))
const FavoriteRoutes = lazy(() => import("./pages/client/Favorite/favoriteRoutes"))
const CompareRoutes = lazy(() => import("./pages/client/Compare/compareRoutes"))
const BasketRoutes = lazy(() => import("./pages/client/Basket/basketRoutes"))
const ProductRoutes = lazy(() => import("./pages/client/Product/productRoutes.jsx"))
const ProductInfoRoutes = lazy(() => import("./pages/client/ProductInfo/productInfoRoutes"))
const LoginRoutes = lazy(() => import("./pages/client/Login/loginRoutes"))
const FastDeliveryRoutes = lazy(() => import("./pages/client/FastDelivery/fastDeliveryRoutes"))

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
        path: "/products",
        component: ProductRoutes
    },
    {
        path: "/product_info",
        component: ProductInfoRoutes
    },
    {
        path: "/login",
        component: LoginRoutes
    },
    {
        path: "/fast_delivery",
        component: FastDeliveryRoutes
    },
]

export default routes