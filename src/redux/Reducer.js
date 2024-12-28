import { ADD, SUB } from './ActionType';

const initialState = {
    counter: 0,
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { counter: state.counter + action.payload };
        case SUB:
            return { counter: state.counter - action.payload };
        default:
            return state;
    }
};

export default Reducer;
