import { useQuery } from "react-query";
import { request } from '../../services/api'


export default ({ id }) => {
    return useQuery(["products", id], async () => {
        return await request.get(`/products/${id}`);
    });
};
