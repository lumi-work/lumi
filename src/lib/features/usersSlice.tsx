import { createClient } from "@/utils/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface userState {
  userId: null | string | number;
  loading: boolean;
  error: string | null;
}

const initialState: userState = {
  userId: null,
  loading: false,
  error: null,
};

const supabase = createClient();

export const userData = createAsyncThunk("user/userData", async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      throw new Error(error.message);
    }
    return data?.user?.id;
  } catch (error) {
    throw error;
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userData.fulfilled, (state, action) => {
      state.userId = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(userData.rejected, (state, action) => {
      state.error = "User fetch error";
      state.loading = false;
    });
    builder.addCase(userData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default usersSlice.reducer;
