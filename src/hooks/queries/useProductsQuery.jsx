import { useQuery } from "react-query";
import { request } from '../../services/api'


export default ({ page }) => {
    return useQuery(["products", page], async () => {
        return await request.get(`/products`, { params: { page } });
    });
};
