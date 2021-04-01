import { useQuery } from "react-query";

import { apiRequest } from "../../services/api";

const useCarsQuery = ({ params, options }) => {
    const query = useQuery(
        ["productQuery", { params }],
        () => apiRequest.get('/api/cars', { params }),
        {
            keepPreviousData: true,
            ...options
        }
    )
    return query
}

export default useCarsQuery