import { useQuery } from "react-query";

import { apiRequest } from "../../services/api";

const useProductsQuery = ({ params, options }) => {
    const query = useQuery(
        ["productQuery", { params }],
        () => apiRequest.get('/api/products', { params }),
        {
            keepPreviousData: true,
            ...options
        }
    )
    return query
}

export default useProductsQuery