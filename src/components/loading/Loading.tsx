import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";

export const Loading = () => {
    const {loadState} = useAppSelector(({userSlice}) => userSlice)
    return (
        <div>
            {!loadState && <div>Loading...</div>}
        </div>
    );
};
