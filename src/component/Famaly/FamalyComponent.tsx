import {simpsons} from "../../data/data.ts";
import {CharacterComponent} from "../Character/CharacterComponent.tsx";
import type {ICharacter} from "../../module/ICharacter.ts";
import './FamalyComponentStyle.css'

export const FamalyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value:ICharacter, index) =><CharacterComponent key={index} item={value}>
                    {value.info}
                </CharacterComponent> )
            }
        </div>
    );
};
