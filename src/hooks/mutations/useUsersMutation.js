import { useMutation } from "react-query";

import { apiRequest } from "../../services/api";

const useUsersMutation = () => {
    const mutation = useMutation((variables) =>
        apiRequest.post("/api/users", variables)
    );

    return mutation;
};

export default useUsersMutation