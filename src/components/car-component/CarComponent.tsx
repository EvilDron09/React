import './car_component_style.css'
import type {ICar} from "../../models/ICar.ts";

interface ICarProps {
    item: ICar
}

export const CarComponent = ({item}:ICarProps) => {
    return (
        <div className={'car'}>
            <div>
                <h2>{item.id}:{item.brand}</h2>
                <p>Price: {item.price} $</p>
                <p>Year: {item.year}</p>
            </div>

        </div>
    );
};
