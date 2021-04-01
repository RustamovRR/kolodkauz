import { useQuery } from "react-query";

import { apiRequest } from "../../services/api";

const useUsersQuery = ({ params, options }) => {
    const query = useQuery(
        ["productQuery", { params }],
        () => apiRequest.get('/api/users', { params }),
        {
            keepPreviousData: true,
            ...options
        }
    )
    return query
}

export default useUsersQuery