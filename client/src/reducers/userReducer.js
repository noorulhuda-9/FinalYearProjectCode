import {
    REGISTER_USER
} from '../constants/userConstants'


export const registerReducer = (state = { user: {} }, action) => {
    switch(action.type){

        case REGISTER_USER:
            return {
                ...state,
                user: [...state.user, action.payload]
            }

        default:
            return state
    }
}

