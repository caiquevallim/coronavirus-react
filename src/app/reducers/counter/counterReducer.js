import {DECREMENT, INCREMENT} from "../../actions/counter/counterActions";

const defaultAuthState = { value: 0 };

export default (state = defaultAuthState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
};
