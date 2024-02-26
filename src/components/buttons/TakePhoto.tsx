import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {useButtons} from '../../hooks/useButtons';
import {CameraProps} from '../toolbar/Toolbar';

export const TakePhotoButton: React.FC<CameraProps> = ({cameraRef}) => {
  const {takePhoto} = useButtons(cameraRef);
  return (
    <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
      <Text style={{fontSize: 40}}>📷</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  captureButton: {
    borderRadius: 100,
  },
});
