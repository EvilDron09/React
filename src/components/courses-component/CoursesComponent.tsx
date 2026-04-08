import {coursesAndDurationArray} from "../../modeles/CoursesAndDurationArray.ts";
import type {CourseModule} from "../../modeles/CourseModules.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
import './CoursesComponentStyle.css'

export const CoursesComponent = () => {
    return (

        <ul>
            {
                coursesAndDurationArray.map((course:CourseModule, index:number) =>{
                    return<CourseComponent course ={course} key ={index}/>
                })
            }
        </ul>
    );
};
