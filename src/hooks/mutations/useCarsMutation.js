import { useMutation } from "react-query";

import { apiRequest } from "../../services/api";

const useCarsMutation = () => {
    const mutation = useMutation((variables) =>
        apiRequest.post("/api/cars", variables)
    );

    return mutation;
};

export default useCarsMutation