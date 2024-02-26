import { createSlice } from "@reduxjs/toolkit";

// Estado inicial
const initialState: { isEnabledSound: boolean } = {
  isEnabledSound: false,
};

// Crear el slice
const soundEnabledSlice = createSlice({
  name: "soundEnabled",
  initialState,
  reducers: {
    toggleSoundEnabled: (state) => {
      state.isEnabledSound = !state.isEnabledSound;
    },
  },
});

// Exportar las acciones y el reducer
export const { toggleSoundEnabled } = soundEnabledSlice.actions;
export default soundEnabledSlice.reducer;
