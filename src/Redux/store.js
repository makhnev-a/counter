import {createStore} from "redux";
import reducer from './CounterReducer';

const store = createStore(reducer);
export default store;