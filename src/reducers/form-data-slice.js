import * as  types from "../actions/action-types";

const formDataReducer = (state = [], action) => {
    console.log('This is called Reducer', action)
        switch(action.type){
        case types.CREATE_USER: return [...state, {...action.userName}];
        default: return state;
    }
};
export default formDataReducer;