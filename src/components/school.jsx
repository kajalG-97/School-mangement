import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchoolData } from "../redux/school/schoolAction";

export const SchoolData = () => {


    const { schoolList, loding, error } = useSelector((store) => store.school);
    console.log('schoolList', schoolList);
    
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
    }, []);
    
    const getData = () => {
        dispatch(getSchoolData());
    }
    return (
        <div>
            {schoolList.map((e) => {
                return <div styled={{display:"flex"}}key={e.id}>
                    <h1>{e.school_name}</h1>
                    {/* <img src={e.school_img} /> */}
                </div>
            })}
        </div>
    )
}