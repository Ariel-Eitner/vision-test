import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {useButtons} from '../../hooks/useButtons';
import {CameraProps} from '../toolbar/Toolbar';

export const ToggleSoundButton: React.FC<CameraProps> = ({cameraRef}) => {
  const {toggleSound, isEnabledSound} = useButtons(cameraRef);

  return (
    <TouchableOpacity style={styles.soundButton} onPress={toggleSound}>
      <Text style={{color: 'black', fontSize: 20}}>
        {isEnabledSound ? '⚡ 🔈' : '⚡ 🔇'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  soundButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});
