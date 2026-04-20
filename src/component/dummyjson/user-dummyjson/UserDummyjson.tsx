import type {FC} from "react";
import type {IUsersDummyjson} from "../../../models/dummyjson/IUsersDummyjson.ts";

type UserDummyjsonType ={
    item:IUsersDummyjson
}

export const UserDummyjson:FC<UserDummyjsonType> = ({item}) => {
    return (
        <div>
            <h3>{item.id}</h3>
            <h2>{item.firstName}, {item.lastName}, {item.maidenName}, {item.username}</h2>
            <p>{item.age},{item.birthDate}</p>
            <p>{item.address.country},{item.address.city},{item.address.state},{item.address.stateCode}, {item.address.postalCode},
                {item.address.coordinates.lat}, {item.address.coordinates.lng}</p>
            <p>{item.bank.cardExpire}, {item.bank.cardNumber}, {item.bank.cardType}, {item.bank.iban}, {item.bank.currency}</p>
            <p>{item.bloodGroup}</p>
            <p>{item.company.name}, {item.company.department}, {item.company.title}</p>
            <p>{item.company.address.country}, {item.company.address.city},{item.company.address.state}, {item.company.address.stateCode},
                {item.company.address.coordinates.lat},{item.company.address.coordinates.lng}, {item.company.address.postalCode}</p>
            <p>{item.email}, {item.phone}</p>
            <p>{item.eyeColor}</p>
            <p>{item.gender}</p>
            <p>{item.crypto.coin},{item.crypto.network}, {item.crypto.wallet}</p>
            <p>{item.ip}</p>
            <p>{item.hair.type}, {item.hair.color}</p>
            <img src={item.image} alt={item.username}/>
            <p>{item.macAddress}, {item.password}</p>
            <p>{item.role}, {item.university}</p>
            <p>{item.height},{item.weight}</p>
            <p>{item.ein}, {item.ssn}</p>
            <p>{item.userAgent}</p>
        </div>
    );
};
