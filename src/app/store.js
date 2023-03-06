import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/UsersSlice'

export default configureStore({
    reducer: {
        user: userReducer,
    },
});