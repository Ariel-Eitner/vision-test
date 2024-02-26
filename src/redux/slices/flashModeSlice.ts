import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FlashMode = "off" | "auto" | "on";

// Estado inicial con tipo explícito
const initialState: { flashMode: FlashMode } = {
  flashMode: "off", // 'auto', 'on', 'off'
};
// Crear el slice
const flashModeSlice = createSlice({
  name: "flashMode",
  initialState,
  reducers: {
    setFlashMode: (state, action: PayloadAction<"auto" | "on" | "off">) => {
      state.flashMode = action.payload;
    },
    toggleFlashMode: (state) => {
      switch (state.flashMode) {
        case "off":
          state.flashMode = "on";
          break;
        case "on":
          state.flashMode = "auto";
          break;
        case "auto":
          state.flashMode = "off";
          break;
        default:
          state.flashMode = "off";
      }
    },
  },
});

// Exportar las acciones y el reducer
export const { setFlashMode, toggleFlashMode } = flashModeSlice.actions;
export default flashModeSlice.reducer;
