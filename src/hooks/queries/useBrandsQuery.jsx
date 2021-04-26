import { useQuery } from "react-query";
import { request } from '../../services/api'


const useBrandsQuery = () => {
    return useQuery(["brands"], async () => {
        return await request.get(`/brands`)
    }, { refetchOnMount: false })
};

export default useBrandsQuery