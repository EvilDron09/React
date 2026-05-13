
import {useQuery} from "@tanstack/react-query";
import {useApi} from "../../../service/api-service.ts";


interface User {
    id:number,
    name: string,
}
export const useUser = ({userId}:{userId:string}) => {
    const {get} = useApi<User[]>()

    return useQuery({
        queryKey:['todos',userId],
        queryFn:async () => {
            return get({ route: `/users/${userId}`});
        }
    })

}
