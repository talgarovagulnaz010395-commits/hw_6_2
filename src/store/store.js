import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "../components/../store/usersSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    }
});
