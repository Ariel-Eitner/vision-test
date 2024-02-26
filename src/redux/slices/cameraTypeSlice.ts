import { createSlice } from "@reduxjs/toolkit";

export type CameraPosition = "back" | "front";

// Definir un tipo para el estado que sea mutable
type CameraState = {
  position: CameraPosition;
};

const initialState: CameraState = { position: "back" };

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    // Corregir el reducer para trabajar con un estado mutable
    toggleCamera: (state) => {
      state.position = state.position === "back" ? "front" : "back";
    },
  },
});

export const { toggleCamera } = cameraSlice.actions;

export default cameraSlice.reducer;
