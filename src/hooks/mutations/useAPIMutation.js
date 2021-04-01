import { useMutation } from "react-query";

import { apiRequest } from "../../services/api";

const useAPIMutation = (url, method, options) => (
    useMutation(
        (variables) => {
            const response = apiRequest.request({ method, url, data: variables });
            return response;
        },
        { ...options }
    )
)

export default useAPIMutation