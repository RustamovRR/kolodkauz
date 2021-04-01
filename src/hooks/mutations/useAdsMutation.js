import { useMutation } from "react-query";

import { apiRequest } from "../../services/api";

const useAdsMutation = () => {
    const mutation = useMutation((variables) =>
        apiRequest.post("/api/ads", variables)
    );

    return mutation;
};

export default useAdsMutation