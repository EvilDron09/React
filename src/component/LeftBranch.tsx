import {LeftBranchA} from "./LeftBranchA.tsx";
import {useMemo} from "react";

export const LeftBranch = () => {
    //виконує цикл 1000 разів, та запам'ятовує їх
    const memox = useMemo(() =>{
        for (let i = 0; i < 1000; i++) {
            console.log(i)
        }
        return null
    },[])
    return (
        // приймає компонент LBA
        <div>
            LeftBranch
            <p><LeftBranchA/></p>
        </div>
    );
};
