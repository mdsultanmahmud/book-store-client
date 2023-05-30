import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./src/reducer/bookSlice";

const store = configureStore({
    reducer: {
        bookReducer: bookReducer
    }
})

export default store 