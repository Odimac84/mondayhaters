import { createSlice } from "@reduxjs/toolkit";
import RAIDS from "./Constants";

const initialState = {
  data: [],
  selectedRaid: RAIDS.NAXXRAMAS
}

export const itemSlice = createSlice({
  name: 'items', // Decide on plural or singular
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.data = action.payload
    },
    setSelectedRaid: (state, action) => {
      state.selectedRaid = action.payload
    }
  }
})

export const { setItems, setSelectedRaid } = itemSlice.actions;

export default itemSlice.reducer