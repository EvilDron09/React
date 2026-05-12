
import {useQuery} from "@tanstack/react-query";
import {useApi} from "../../../service/api-service.ts";


interface User {
    id:number,
    name: string,
}
export const useUsers = () => {
    const {get} = useApi<User[]>()

    return useQuery({
        queryKey:['todos'],
        queryFn:async () => {
            return get({ route: '/users'});
        }
    })

}
