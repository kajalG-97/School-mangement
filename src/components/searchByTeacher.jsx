import { useParams } from "react-router-dom"

export const SearchTeacherInfo = () => {

    const { teacher_name } = useParams();
    console.log('_id', teacher_name);

    const {classList} = useSelector((store) => store.classes)
    console.log('classList', classList);
    return (

        <h1>cfvgbhnjm</h1>
    )
}