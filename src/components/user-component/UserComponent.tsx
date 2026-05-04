import {type FC, memo} from "react";

export const UserComponent:FC<{foo:() => void}> = memo(() => {
    return (
        <div>
            user
        </div>
    );
});
