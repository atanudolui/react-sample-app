import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userData",
    initialState: {
        data: []
    },
    reducers: {
        saveUser(state, action) {
            console.log(action.payload);
            console.log("state", state.data);
            //state.data.push(newUser);
            let tmp = state.data;
            console.log(tmp);
            tmp.push({ name: action.payload.name, email: action.payload.email });
            state.data = tmp;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;