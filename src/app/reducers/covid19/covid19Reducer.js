import {
    DATA_FETCH_SUCCESS,
    DATA_FETCH_ERROR,
    DATA_FETCH_REQUEST,
} from "../../actions/covid19/covid19Actions";

const defaultAuthState = {
    isLoading: false,
    error: null,
    data: [],
    loaded: false,
};

export default (state = defaultAuthState, action) => {
    switch (action.type) {
        case DATA_FETCH_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true,
                loaded: false,
            };
        case DATA_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                isLoading: false,
                loaded: true,
            };
        case DATA_FETCH_ERROR:
            return {
                ...state,
                data: [],
                error: action.payload,
                isLoading: false,
                loaded: false,
            };
        default:
            return state;
    }
};
