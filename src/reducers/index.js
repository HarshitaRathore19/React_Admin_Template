import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import empReducer from "./empReducer"
import chartReducer from "./chartReducer"

const rootReducer = combineReducers({
    adminReducer: adminReducer,
    empReducer: empReducer,
    chartReducer: chartReducer
});

export default rootReducer;
