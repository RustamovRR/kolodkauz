import { useQuery } from "react-query";
import { request } from '../../services/api'


const useCarsQuery = ({ id }) => {
    return useQuery(["cars", id], async () => {
        return await request.get(`/products/${id}`);
    })
}

export default useCarsQuery