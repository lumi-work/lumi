import { createClient } from "@/utils/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface WorkspaceState {
  userId: string;
  workspaceId: number;
  name: string;
  isSelected: boolean;
}

export interface WorkspaceData {
  data: WorkspaceState[];
  loading: boolean;
  error: null | string;
}

const initialState: WorkspaceData = {
  data: [],
  loading: false,
  error: null,
};

export const fetchWorkspaces = createAsyncThunk("workspaces/userWorkspace", async () => {
  try {
    const supabase = createClient();
    const { data: authData } = await supabase.auth.getUser();

    if (!authData || !authData.user) {
      throw new Error("User not authenticated");
    }

    const { data: workspaces, error } = await supabase.from("workspaces").select("*").eq("userId", authData.user.id);

    if (error) {
      console.error("Error fetching workspaces:", error.message);
      throw error;
    }

    if (!workspaces || workspaces.length === 0) {
      return [];
    }

    return workspaces;
  } catch (error) {
    console.error("Error in fetchWorkspaces:", error);
    throw error;
  }
});

export const workspacesSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkspaces.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchWorkspaces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkspaces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "fetch rejected";
      });
  },
});

export const {} = workspacesSlice.actions;

export default workspacesSlice.reducer;
