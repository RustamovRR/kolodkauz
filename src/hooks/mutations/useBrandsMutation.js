import { useMutation } from "react-query";

import { apiRequest } from "../../services/api";

const useBrandsMutation = () => {
    const mutation = useMutation((variables) =>
        apiRequest.post("/api/brands", variables)
    );

    return mutation;
};

export default useBrandsMutation