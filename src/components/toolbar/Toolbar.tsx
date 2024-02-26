import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  GalleryScreen,
  TakePhotoButton,
  ToggleCameraTypeButton,
  ToggleFlashButton,
  ToggleQualityButton,
  ToggleSoundButton,
} from '../buttons';
import {Camera} from 'react-native-vision-camera';
export type CameraProps = {
  cameraRef: React.RefObject<Camera>;
};

export const Toolbar: React.FC<CameraProps> = ({cameraRef}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRightButtons}>
        <ToggleFlashButton cameraRef={cameraRef} />
        <ToggleQualityButton cameraRef={cameraRef} />
        <ToggleSoundButton cameraRef={cameraRef} />
      </View>
      <View style={styles.bottomBar}>
        <GalleryScreen />
        <TakePhotoButton cameraRef={cameraRef} />
        <ToggleCameraTypeButton cameraRef={cameraRef} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topRightButtons: {
    alignSelf: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 10,
    marginTop: 10,
    marginRight: 5,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});
