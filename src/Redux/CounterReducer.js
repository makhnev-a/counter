const SET_START_VALUE = 'SET_START_VALUE';
const SET_MAX_VALUE = 'SET_MAX_VALUE';
const ADD_COUNT_NUM = 'ADD_COUNT_NUM';
const CLEAN_COUNT_NUM = 'CLEAN_COUNT_NUM';
const SET_ERROR = 'SET_ERROR';
const SET_DISABLED = 'SET_DISABLED';
const CHANGE_SET_TOOGLE = 'CHANGE_SET_TOOGLE';
const MAX_INPUT_VALUE_CHANGE = 'MAX_INPUT_VALUE_CHANGE';
const MIN_INPUT_VALUE_CHANGE = 'MIN_INPUT_VALUE_CHANGE';

const initialState = {
    countNum: 0,
    maxValue: 5,
    minValue: 0,
    error: null,
    isDisabled: false,
    setCounterToggle: false,
    isMaxInputValid: true,
    isMinInputValid: true
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
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            };
        case SET_DISABLED:
            return {
                ...state,
                isDisabled: action.isDisabled
            };
        case CHANGE_SET_TOOGLE:
            return {
                ...state,
                setCounterToggle: !state.setCounterToggle
            };
        case MAX_INPUT_VALUE_CHANGE:
            return {
                ...state,
                isMaxInputValid: action.maxValue
            };
        case MIN_INPUT_VALUE_CHANGE:
            return {
                ...state,
                isMinInputValid: action.minValue
            };
        default:
            return state;
    }
};

export default reducer;

export const setStartValue = (startValue) => ({
    type: SET_START_VALUE,
    startValue
});

export const setMaxValue = (maxValue) => ({
    type: SET_MAX_VALUE,
    maxValue
});

export const setError = (error) => ({
    type: SET_ERROR,
    error
});

export const setDisabled = (isDisabled) => ({
    type: SET_DISABLED,
    isDisabled
});

export const maxInputValueChange = (maxValue) => ({
    type: MAX_INPUT_VALUE_CHANGE,
    maxValue
});

export const minInputValueChange = (minValue) => ({
    type: MIN_INPUT_VALUE_CHANGE,
    minValue
});

export const addCountNum = () => ({type: ADD_COUNT_NUM});
export const cleanCountNum = () => ({type: CLEAN_COUNT_NUM});
export const changeSetToggle = () => ({type: CHANGE_SET_TOOGLE});
