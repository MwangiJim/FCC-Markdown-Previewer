import {configureStore }from '@reduxjs/toolkit'
import { markDownReducer } from './markdownReducer'

const store = configureStore({
    reducer:{
        mKdownReducer:markDownReducer.reducer
    }
})

export default store;