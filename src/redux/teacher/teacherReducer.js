import { GET_TEACHER, TEACHER_ERROR,  TEACHER_LODING } from "./teacherAction"

const initialState = {
   
    list: [],
    loding: false,
    error: false
}

export const teacherReducer = (store = initialState, { type, payload }) => {
    switch (type) {
       
        case TEACHER_LODING: return { ...store, loding: true }

        case TEACHER_ERROR: return { ...store, loading: false, error: true }

        case GET_TEACHER: return { ...store, loading: false, error: false, list: payload }

        default: return store;
    }
}