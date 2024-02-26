import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useButtons} from '../../hooks/useButtons';
import {CameraProps} from '../toolbar/Toolbar';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';

export const ToggleFlashButton: React.FC<CameraProps> = ({cameraRef}) => {
  const {toggleFlash} = useButtons(cameraRef);
  const flashMode = useSelector(
    (state: RootState) => state.flashMode.flashMode,
  );

  let buttonStyle = styles.flashButton;
  let content = '⚡';

  switch (flashMode) {
    case 'off':
      buttonStyle = {...buttonStyle, ...styles.flashButtonNo};
      break;
    case 'on':
      buttonStyle = {...buttonStyle, ...styles.flashButtonYes};
      break;
    case 'auto':
      buttonStyle = {...buttonStyle, ...styles.flashButtonYes};
      content = '⚡A';
      break;
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={toggleFlash}>
      <Text style={{color: 'black', fontSize: 20}}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flashButton: {
    padding: 5,
    borderRadius: 10,
  },
  flashButtonNo: {
    backgroundColor: '#707070',
  },
  flashButtonYes: {
    backgroundColor: 'white',
  },
  flashButtonText: {
    color: 'black',
  },
});
