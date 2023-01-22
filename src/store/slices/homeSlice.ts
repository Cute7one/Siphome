import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
  name: string;
  age: number;
};

export interface HomeState {
  users: User[];
}

const initialState: HomeState = {
  users: [
    {
      name: 'Alex',
      age: 31,
    }
  ],
};

export const homeSlice = createSlice({
  name: "features",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    deleteUsers: (state) => {
      state.users = [];
    },
  },
});

export const { setUsers, deleteUsers } = homeSlice.actions;

export default homeSlice.reducer;
