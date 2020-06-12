const SET_START_VALUE = 'SET_START_VALUE';
const SET_MAX_VALUE = 'SET_MAX_VALUE';
const ADD_COUNT_NUM = 'ADD_COUNT_NUM';
const CLEAN_COUNT_NUM = 'CLEAN_COUNT_NUM';

const initialState = {
    countNum: 0,
    maxValue: 5,
    minValue: 0,
    error: null,
    isDisabled: false,
    setCounterToggle: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START_VALUE:
            return {
                ...state,
                countNum: action.startValue,
                minValue: action.startValue
            };
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            };
        case ADD_COUNT_NUM:
            return {
                ...state,
                countNum: state.countNum + 1
            };
        case CLEAN_COUNT_NUM:
            return {
                ...state,
                countNum: state.minValue
            };
        default:
            return state;
    }
};

export default reducer;

export const setStartValue = (startValue) => {
    return {
        type: SET_START_VALUE,
        startValue
    };
};

export const setMaxValue = (maxValue) => {
    return {
        type: SET_MAX_VALUE,
        maxValue
    };
};

export const addCountNum = () => {
    return {
        type: ADD_COUNT_NUM
    };
};

export const cleanCountNum = () => {
    return {
        type: CLEAN_COUNT_NUM
    };
};