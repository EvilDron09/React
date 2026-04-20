import type {FC} from "react";
import type {IUsersJsonplaceholder} from "../../../models/jsonplaceholder/IUsersJsonplaceholder.ts";

type UserJsonplaceholderType = {
    item: IUsersJsonplaceholder
}

export const UserJsonplaceholder:FC<UserJsonplaceholderType> = ({item}) => {
    return (
        <div>
            <h3>{item.id}</h3>
            <h2>{item.name}, {item.username}</h2>
            <p>{item.email}, {item.phone}, {item.website}</p>
            <p>{item.address.city}, {item.address.street}, {item.address.suite}, {item.address.zipcode},
                {item.address.geo.lat}, {item.address.geo.lng}</p>
            <p>{item.company.name}, {item.company.bs}, {item.company.catchPhrase} </p>
        </div>
    );
};
