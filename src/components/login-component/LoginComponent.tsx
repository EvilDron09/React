import {useEffect} from "react";
import {login} from "../../services/api-service.ts";


export const LoginComponent = () => {

    // логінація користувача
    useEffect(() => {
        login({
            username:'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        })

    }, []);

    return (
        <h3>
           Emily
        </h3>
    );
};
