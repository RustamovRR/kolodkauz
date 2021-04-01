import { useQuery } from "react-query";

import { apiRequest } from "../../services/api";

const useAPIQuery = (url, params, options) => (
    useQuery(
        [url, params],
        () => apiRequest.get(url, { params }),
        { ...options }
    )
)

export default useAPIQuery