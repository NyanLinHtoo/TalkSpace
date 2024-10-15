import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  userInfo:
    | {
        uid: string;
        email: string;
        displayName: string;
      }
    | undefined;
}

const initialState: initialStateType = {
  userInfo: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions;

export default authSlice.reducer;
