import { useQuery } from "react-query";
import { request } from '../../services/api'


const useProductsQuery = ({ page, brand, model, sort, sale, price }) => {
    return useQuery(["products"], async () => {
        return await request.get(`/products`, {
            params: {
                page, sort, sale, price: price.toString()
            }
        })
    })
};

export default useProductsQuery