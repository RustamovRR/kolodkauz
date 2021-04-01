import { useMutation } from "react-query";

import { apiRequest } from "../../services/api";

const useProductMutation = () => {
    const mutation = useMutation((variables) =>
        apiRequest.post("/api/products", variables)
    );

    return mutation;
};

export default useProductMutation