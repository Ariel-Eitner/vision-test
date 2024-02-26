import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {useButtons} from '../../hooks/useButtons';
import {CameraProps} from '../toolbar/Toolbar';

export const ToggleQualityButton: React.FC<CameraProps> = ({cameraRef}) => {
  const {toggleQualityMode, qualityMode} = useButtons(cameraRef);
  return (
    <TouchableOpacity style={styles.qualityButton} onPress={toggleQualityMode}>
      <Text style={{color: 'black'}}>Quality: {qualityMode}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  qualityButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});
