import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

import {Toolbar} from '../toolbar/Toolbar';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';

export const CameraAppByArielEitner = () => {
  const cameraRef = useRef<Camera>(null);
  const {hasPermission, requestPermission} = useCameraPermission();
  const cameraType = useSelector((state: RootState) => state.camera.position);
  const device = useCameraDevice(cameraType);

  if (!hasPermission) {
    requestPermission().catch(console.error);
    return <Text>Deseas usar la camara?</Text>;
  }

  if (device == null) return <div>No hay cámara disponible.</div>;

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <Toolbar cameraRef={cameraRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
