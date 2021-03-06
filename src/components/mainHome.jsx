import { useSelector } from "react-redux";
import { SchoolData } from "./school"
import { TeacherData } from "./teacherPage"
import { ColorToggleButton } from "./ToggleGender";

export const MainHome = () => {
    const { loding, error } = useSelector((store) => store.teacher);

    return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong" /> : (

        // return (
        <div>
            
            <div>
                <div style={{}}>
                    <h1 style={{color:"green",textAlign:"left",paddingLeft:60}}>School Name :-</h1>
                    <SchoolData />
                </div>

                <TeacherData />
            </div>
        </div>

    )
}