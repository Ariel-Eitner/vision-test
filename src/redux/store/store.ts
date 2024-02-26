import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cameraTypeSlice from '../slices/cameraTypeSlice';
import flashModeSlice from '../slices/flashModeSlice';
import soundSlice from '../slices/soundSlice';
import photoReducer from '../slices/lastPhotoSlice';
import qualityModeReducer from '../slices/qualityModeSlice';

export const rootReducer = combineReducers({
  camera: cameraTypeSlice,
  flashMode: flashModeSlice,
  sound: soundSlice,
  photo: photoReducer,
  qualityMode: qualityModeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
