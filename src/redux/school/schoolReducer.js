import { GET_SCHOOL, SCHOOL_ERROR, SCHOOL_LODING } from "./schoolAction"

const initialState = {

    schoolList: [],
    loding: false,
    error: false
}


export const schoolReducer = (store = initialState, { type, payload }) => {
    switch (type) {

        case SCHOOL_LODING: return { ...store, loding: true }

        case SCHOOL_ERROR: return { ...store, loading: false, error: true }

        case GET_SCHOOL: return { ...store, loading: false, error: false, schoolList: payload }

        default: return store;
    }
}