import {useApi} from "../../../service/api-service.ts";
import {useMutation} from "@tanstack/react-query";

interface RequestProps{
    title: string,
    body:string,
    userId:string,
}

interface Response extends Omit<RequestProps, 'userId'>{
    id:number,
    userId:number,
}

export const useCreatePost = () =>{
    const { post } = useApi<Response>();
    const route = '/posts';

    return useMutation({
        mutationFn: async ({title, body,userId}: RequestProps):Promise<Response> => {
            return post({
                route,
                body: {
                    title,
                    body,
                    userId,
                },
            })
        },
        retry: false,
    })
}
