import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {useButtons} from '../../hooks/useButtons';
import {CameraProps} from '../toolbar/Toolbar';

export const ToggleCameraTypeButton: React.FC<CameraProps> = ({cameraRef}) => {
  const {toggleCameraType} = useButtons(cameraRef);

  return (
    <>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleCameraType}>
        <Text style={{color: 'black', fontSize: 30}}>🔄</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    borderRadius: 10,
    marginHorizontal: 50,
  },
});
