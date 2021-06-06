import { useQuery } from "react-query";
import { request } from '../../services/api'


const useProductsQuery = ({ page }) => {
    return useQuery(["products"], async () => {
        return await request.get(`/products`, {
            params: {
                page
            }
        })
    })
};

export default useProductsQuery