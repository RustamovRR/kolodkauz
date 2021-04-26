import { useQuery } from "react-query";
import { request } from '../../services/api'


const useAdsQuery = () => {
    return useQuery(["ads"], async () => {
        return await request.get(`/ads`)
    }, { refetchOnMount: false })
};

export default useAdsQuery