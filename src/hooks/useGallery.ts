import {PicturesDirectoryPath, readDir} from '@dr.pogodin/react-native-fs';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setLastPhoto} from '../redux/slices/lastPhotoSlice';

export const useGallery = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const dispatch = useDispatch();

  const loadAllPhotos = async () => {
    try {
      const galleryPath = `${PicturesDirectoryPath}/VisionTest/`;
      const files = await readDir(galleryPath);

      const imageFiles = files.filter(file => {
        return (
          file.isFile() &&
          (file.name.endsWith('.jpg') || file.name.endsWith('.png'))
        );
      });

      const imagePaths = imageFiles.map(file => file.path);
      setPhotos(imagePaths);
    } catch (error) {
      console.error('Error al cargar fotos:', error);
    }
  };

  const loadLastPhoto = async () => {
    try {
      const galleryPath = `${PicturesDirectoryPath}/VisionTest/`;
      const files = await readDir(galleryPath);

      const imageFiles = files
        .filter(
          file =>
            file.isFile() &&
            (file.name.endsWith('.jpg') || file.name.endsWith('.png')),
        )
        .sort((a, b) => {
          const aTime = a.mtime?.getTime() || 0;
          const bTime = b.mtime?.getTime() || 0;
          return bTime - aTime;
        });

      if (imageFiles.length > 0) {
        const lastPhotoPath = imageFiles[0].path;
        dispatch(setLastPhoto(lastPhotoPath));
        console.log(`Última foto cargada: ${lastPhotoPath}`);
      }
    } catch (error) {
      console.error('Error al cargar la última foto:', error);
    }
  };
  useEffect(() => {
    loadLastPhoto();
    loadAllPhotos();
  }, [PicturesDirectoryPath]);

  return {
    photos,
    loadAllPhotos,
    loadLastPhoto,
  };
};
