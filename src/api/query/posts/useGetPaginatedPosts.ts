import {useApi} from "../../../service/api-service.ts";
import {keepPreviousData, useQuery} from "@tanstack/react-query";

interface Post{
    id: string;
    title: string;
    body: string;
    userId: string;
}

export const useGetPaginatedPosts = ({limit, offset}: {limit: number; offset:number}) =>{
    const { get } = useApi<Post[]>();

    return useQuery({
        queryKey: ['posts', limit, offset],
        queryFn: async() =>{
            return get({ route: `/posts?_start =${offset}&_limit=${limit}`});
        },
        placeholderData: keepPreviousData,
    })
}
