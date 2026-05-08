import {memo} from "react";

// Оптимізує код. Відключає зайвий рендер, якщо пропси не змінюються
export const UserComponent = memo(() => {
    return (
        <div>
            user
        </div>
    );
});
