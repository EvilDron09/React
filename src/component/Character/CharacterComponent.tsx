import type {ICharacter} from "../../module/ICharacter.ts";
import type {ReactNode} from "react";
import './CharacterComponentStyle.css'

interface CharacterComponentProps {
    item: ICharacter
    children: ReactNode
}

export const CharacterComponent = ({item,children}: CharacterComponentProps) => {
    return (
        <div>
            <h3>{item.name} {item.surname}</h3>
            <p>{children}</p>
            <img src={item.photo} alt={item.name}/>
        </div>
    );
};
