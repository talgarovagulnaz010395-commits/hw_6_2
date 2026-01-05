import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users",
    async () => {
        const res = await fetch ("https://jsonplaceholder.typicode.com/users");
        return res.json();
    }
);
const  usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        status: "loading",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = "loading";
            })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = "success";
            state.users = action.payload;
        })

    }
})
export default usersSlice.reducer;