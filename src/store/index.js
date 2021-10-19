import {configureStore} from "@reduxjs/toolkit"
import calReducer from "./calculator-slice"
const store = configureStore({
    reducer: {
        cal: calReducer
    }
})

export default store;