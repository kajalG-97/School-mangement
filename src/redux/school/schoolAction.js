import axios from "axios";

export const SCHOOL_ERROR = 'SCHOOL_ERROR';

export const SCHOOL_LODING = 'SCHOOL_LODING';

export const GET_SCHOOL = 'GET_SCHOOL';

export const schoolLoding = () => ({ type: SCHOOL_LODING });

export const schoolError = () => ({ type: SCHOOL_ERROR });

export const getSchoolList = (payload) => ({ type: GET_SCHOOL, payload })


export const getSchoolData = (data) => (dispatch) => {
    console.log('data', data);
    // dispatch(schoolLoding());
    axios.get(`https://school-info-backend-project.herokuapp.com/school/${data}`).then(({ data }) => dispatch(getSchoolList(data)))
        .catch((err) => dispatch(schoolError()));
}
