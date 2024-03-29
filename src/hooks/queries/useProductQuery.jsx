import { useQuery } from "react-query";
import { request } from '../../services/api'


const useProductQuery = ({ id }) => {
    return useQuery(["product", id], async () => {
        return await request.get(`/products/${id}`);
    } )
}

export default useProductQuery