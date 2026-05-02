import {useEffect} from "react";
import {login} from "../../services/api-service.ts";

export const LoginComponent = () => {
    useEffect(() => {
        login({
            username:'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        })

    }, []);

    return (
        <h3>
            Login Page
        </h3>
    );
};
