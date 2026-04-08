import'./CouserComponent.css'
import type {FC} from "react";
import type {CourseModule} from "../../modeles/CourseModules.ts";

type PropsType ={
    course: CourseModule
}
export const CourseComponent:FC<PropsType> = ({course}) => {
    return (
        <li>
            {course.title} {course.monthDuration}
        </li>
    );
};
