import { GET_CLASS_LIST } from "./classAction";

const initialState = {

    classList: [],

}


export const classReducer = (store = initialState, { type, payload }) => {

    switch (type) {

        case GET_CLASS_LIST: return { ...store, classList: payload }

        default: return store;
    }
}