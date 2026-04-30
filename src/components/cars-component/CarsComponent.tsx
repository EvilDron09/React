import {useEffect, useState} from "react";
import type {ICar} from "../../models/ICar.ts";
import {getCars} from "../../servises/api.servise.ts";
import {CarComponent} from "../car-component/CarComponent.tsx";

export const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([])

    useEffect(() => {
            getCars().then((cars) =>{
                setCars(cars)
            })
    }, []);

    return (
        <>
            {
                cars.map(car =><CarComponent key={car.id} item={car}/>)
            }
        </>
    );
};
