import { useQuery } from "react-query";
import { request } from '../../services/api'


const useCarsQuery = () => {
    return useQuery(["cars"], async () => {
        return await request.get(`/cars`);
    })
}

export default useCarsQuery 