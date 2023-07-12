import { combineReducers } from 'redux';
import { hadithReducer } from './hadithReducer';


const rootReducer = combineReducers({
   hadith : hadithReducer
  });
  
  export default rootReducer;