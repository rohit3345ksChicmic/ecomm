import { START_LOADER, STOP_LOADER } from "../ActionTypes";

const initialState = {
    loading: false
}

function commonReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADER:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADER:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default commonReducer;