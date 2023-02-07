import { configureStore } from "@reduxjs/toolkit";
import scoreCardReducer from "./scorecard.slice";

const store = configureStore({
    reducer: scoreCardReducer,
})

export default store