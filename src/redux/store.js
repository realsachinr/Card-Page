import { configureStore } from "@reduxjs/toolkit";
import CreateSlice from "./slices/CreateSlice";

export const store = configureStore({
    reducer: {
        card : CreateSlice
    }
})