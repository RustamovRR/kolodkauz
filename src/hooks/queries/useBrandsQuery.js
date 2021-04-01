import { useQuery } from "react-query";

import { apiRequest } from "../../services/api";

const useBrandsQuery = ({ params, options }) => {
    const query = useQuery(
        ["productQuery", { params }],
        () => apiRequest.get('/api/brands', { params }),
        {
            keepPreviousData: true,
            ...options
        }
    )
    return query
}

export default useBrandsQuery