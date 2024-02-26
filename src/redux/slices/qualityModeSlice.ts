import {createReducer} from '@reduxjs/toolkit';

// Definición de los tipos
export type QualityMode = 'quality' | 'balanced' | 'speed';

// Estado inicial
const initialState: QualityMode = 'quality';

// Reducer con tipado explícito
const qualityModeReducer = createReducer<QualityMode>(initialState, builder => {
  builder.addCase('qualityMode/toggle', state => {
    switch (state) {
      case 'quality':
        return 'balanced';
      case 'balanced':
        return 'speed';
      case 'speed':
        return 'quality';
      default:
        return state;
    }
  });
});

export default qualityModeReducer;

// Acciones
export const toggleQuality = () => ({type: 'qualityMode/toggle'});
