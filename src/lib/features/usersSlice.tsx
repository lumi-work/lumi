import { createClient } from "@/utils/client";
import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  userId: null | string | number;
  username: string | null;
}

const initialState: userState = {
  userId: null,
  username: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
