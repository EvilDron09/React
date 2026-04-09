import type {ICourseArray} from "../../module/ICourseArray.ts";
import type {FC} from "react";
import './CourseArrayComponent.css'



type CourseArrayComponentType ={
    item:ICourseArray
}


export const CourseArrayComponent:FC<CourseArrayComponentType> = ({item}) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.monthDuration} month, {item.hourDuration} hour</p>
            <ul>
                {
                    item.modules.map((module:string,index:number)=>(
                        <li key={index}>{module}</li>
                    ))
                }
            </ul>
        </div>
    );
};
