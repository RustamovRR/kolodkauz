import { lazy } from 'react'

const HomeRoutes = lazy(() => import("./pages/Home/homeRoutes"))
const InfoRoutes = lazy(() => import("./pages/Information/infoRoutes"))
const FavoriteRoutes = lazy(() => import("./pages/Favorite/favoriteRoutes"))
const CompareRoutes = lazy(() => import("./pages/Compare/compareRoutes"))
const BasketRoutes = lazy(() => import("./pages/Basket/basketRoutes"))
const ProductRoutes = lazy(() => import("./pages/Product/productRoutes.jsx"))
const ProductInfoRoutes = lazy(() => import("./pages/ProductInfo/productInfoRoutes"))
const LoginRoutes = lazy(() => import("./pages/Login/loginRoutes"))
const FastDeliveryRoutes = lazy(() => import("./pages/FastDelivery/fastDeliveryRoutes"))

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