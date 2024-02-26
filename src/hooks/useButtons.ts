// import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Camera} from 'react-native-vision-camera';

import {toggleCamera} from '../redux/slices/cameraTypeSlice';
import {RootState} from '../redux/store/store';
import {toggleFlashMode} from '../redux/slices/flashModeSlice';
import {toggleSoundEnabled} from '../redux/slices/soundSlice';
import {
  PicturesDirectoryPath,
  exists,
  mkdir,
  moveFile,
  scanFile,
} from '@dr.pogodin/react-native-fs';
import {Platform} from 'react-native';
import {setLastPhoto} from '../redux/slices/lastPhotoSlice';
import {toggleQuality} from '../redux/slices/qualityModeSlice';
export const useButtons = (cameraRef: React.RefObject<Camera>) => {
  const dispatch = useDispatch();

  const qualityMode = useSelector((state: RootState) => state.qualityMode);
  console.log(qualityMode);

  const toggleQualityMode = () => {
    dispatch(toggleQuality());
  };
  const toggleCameraType = () => {
    dispatch(toggleCamera());
  };
  const flashMode = useSelector(
    (state: RootState) => state.flashMode.flashMode,
  );
  const isEnabledSound = useSelector(
    (state: RootState) => state.sound.isEnabledSound,
  );

  const toggleFlash = () => {
    dispatch(toggleFlashMode());
  };
  const toggleSound = () => {
    dispatch(toggleSoundEnabled());
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto({
          qualityPrioritization: qualityMode,
          flash: flashMode,
          enableShutterSound: isEnabledSound,
        });

        await moveImageToGallery(photo.path);
      } catch (error) {
        console.error('Error al tomar la foto:', error);
      }
    }
  };

  const moveImageToGallery = async (filePath: string) => {
    const galleryPath = `${PicturesDirectoryPath}/VisionTest/`;
    const fileName = filePath.split('/').pop();
    const newFilePath = `${galleryPath}${fileName}`;

    try {
      const folderExists = await exists(galleryPath);
      if (!folderExists) {
        await mkdir(galleryPath);
      }

      await moveFile(filePath, newFilePath);
      if (Platform.OS === 'android') {
        scanFile(newFilePath);
        console.log(newFilePath);
        updateLastPhoto(newFilePath);
      }
      return newFilePath;
    } catch (error) {
      console.error('Error al mover la imagen:', error);
    }
  };

  const updateLastPhoto = (newPhotoPath: any) => {
    dispatch(setLastPhoto(newPhotoPath));
  };

  return {
    toggleCameraType,
    qualityMode,
    toggleFlash,
    isEnabledSound,
    toggleSound,
    takePhoto,
    toggleQualityMode,
  };
};
