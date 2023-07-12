
import { Provider } from 'react-redux';
// import rootReducer from './reducers/rootreducer';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';




const store = configureStore({
    reducer: rootReducer
});

export default store;
export { Provider };