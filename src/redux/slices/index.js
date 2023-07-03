import {combineReducers} from 'redux'
import userSlice from './userSlice'
// import viewSessionReducer from './viewSessionReducer'


const rootReducer=combineReducers({
    // getsession: viewSessionReducer,
    auth: userSlice,
    
})


export default rootReducer;