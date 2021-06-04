import { useQuery } from "react-query";
import { request } from '../../services/api'


const useProductsQuery = ({ page = 0, params }) => {
    return useQuery(["products", { params }], async () => {
        return await request.get(`/products`, {
            params: {
                page
            }
        })
    }, { keepPreviousData: true })
};

export default useProductsQuery