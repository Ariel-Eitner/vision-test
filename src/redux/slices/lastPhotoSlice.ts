import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PhotoState {
  lastPhoto: string;
}

const initialState: PhotoState = {
  lastPhoto: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setLastPhoto(state, action: PayloadAction<string>) {
      state.lastPhoto = action.payload;
    },
  },
});

export const {setLastPhoto} = photoSlice.actions;

export default photoSlice.reducer;
