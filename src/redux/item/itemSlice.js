import { createSlice } from "@reduxjs/toolkit";
import RAIDS from "./Constants";

const initialState = {
  data: [],
  selectedRaid: RAIDS.NAXXRAMAS,
  currentBosses: ["test"],
  re: {},
};

export const itemSlice = createSlice({
  name: "items", // Decide on plural or singular
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.data = action.payload;
    },
    setSelectedRaid: (state, action) => {
      state.selectedRaid = action.payload;
    },
    setCurrentBosses: (state, action) => {
      state.currentBosses = action.payload;
    },
    setReservedItems: (state, action) => {
      state.re = action.payload;
    },
  },
});

export const { setItems, setSelectedRaid, setCurrentBosses, setReservedItems } =
  itemSlice.actions;

export default itemSlice.reducer;
