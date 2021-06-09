import { useQuery } from "react-query";
import { request } from '../../services/api'


const useSearchQuery = ({ search_text }) => {
    return useQuery(["searchQuery", search_text], async () => {
        return await request.get(`/search`, { params: { search_text } });
    })
}

export default useSearchQuery