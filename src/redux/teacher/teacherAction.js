import axios from "axios";

export const TEACHER_LIST = 'TEACHER_LIST'; 

export const TEACHER_ERROR = 'TEACHER_ERROR';

export const TEACHER_LODING = 'TEACHER_LODING';

export const GET_TEACHER = 'GET_TEACHER';

export const teacherLoding = () => ({ type: TEACHER_LODING });

export const teacherError = () => ({ type: TEACHER_ERROR });

export const getTeacherList = (payload) => ({ type: GET_TEACHER, payload})


export const getTeacherData = (page,sort,filter) => (dispatch) => {
    dispatch(teacherLoding());
    axios.get(`https://school-info-backend-project.herokuapp.com/teacher?count=${page}&sortBy=age&OrderBy=${sort}&gender=${filter}`).then(({ data }) => dispatch(getTeacherList(data)))
        .catch((err) => dispatch(teacherError()));
}
