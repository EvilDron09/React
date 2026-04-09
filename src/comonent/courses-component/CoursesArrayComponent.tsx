import './CoursesArrayComponent.css'
import {coursesArray} from "../../course-data/CourseArrayData.ts";
import type {ICourseArray} from "../../module/ICourseArray.ts";
import {CourseArrayComponent} from "../course-component/CourseArrayComponent.tsx";


export const CoursesArrayComponent = () => {
    return (
        <div>
            {
                coursesArray.map((value:ICourseArray, index:number) =>{
                   return<CourseArrayComponent item={value} key={index}/>
                })

            }
        </div>

    );
};
