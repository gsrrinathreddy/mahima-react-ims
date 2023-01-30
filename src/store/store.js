import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import chocolateReducer from '../features/chocolates/chocolateSlice';
import flowerReducer from '../features/flower/flowerSlice'
import logger from 'redux-logger';

const store=configureStore({
    reducer:
    {
     cake:cakeReducer,
     icecream: icecreamReducer,
     chocolate: chocolateReducer,
     flower: flowerReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export default store;

