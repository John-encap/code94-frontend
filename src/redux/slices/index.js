import {combineReducers} from 'redux'
import userSlice from './userSlice'
import favSlice from './favSlice';
// import viewSessionReducer from './viewSessionReducer'


const rootReducer=combineReducers({
    // getsession: viewSessionReducer,
    auth: userSlice,
    fav: favSlice,
    
})


export default rootReducer;