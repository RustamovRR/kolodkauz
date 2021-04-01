import { useQuery } from "react-query";

import { apiRequest } from "../../services/api";

const useAdsQuery = ({ params, options }) => {
    const query = useQuery(
        ["productQuery", { params }],
        () => apiRequest.get('/api/ads', { params }),
        {
            keepPreviousData: true,
            ...options
        }
    )
    return query
}

export default useAdsQuery