import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';

import {useGallery} from '../../hooks/useGallery';

export const GalleryScreen = () => {
  const lastPhoto = useSelector((state: RootState) => state.photo.lastPhoto);
  const {photos} = useGallery();

  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const renderPhotoRows = () => {
    let rows = [];
    for (let i = 0; i < photos.length; i += 3) {
      rows.push(
        <View key={i} style={styles.imageRow}>
          {photos.slice(i, i + 3).map((photo, index) => (
            <Image
              key={index}
              source={{uri: `file://${photo}`}}
              style={styles.image}
              resizeMode="contain"
            />
          ))}
        </View>,
      );
    }
    return rows;
  };

  return (
    <ScrollView style={{}}>
      <View style={{}}>
        {lastPhoto && (
          <TouchableOpacity style={{}} onPress={() => setModalVisible(true)}>
            <Image
              source={{uri: `file://${lastPhoto}`}}
              style={{
                height: 100,
                width: 70,
                aspectRatio: 3 / 4,
              }}
            />
          </TouchableOpacity>
        )}

        {!lastPhoto && <Text>No hay fotos recientes</Text>}

        <Modal
          animationType="slide"
          transparent={false}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <ScrollView>
            {renderPhotoRows()}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </ScrollView>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: '32%',
    height: 100,
    aspectRatio: 3 / 4,
    margin: 1,
  },
});
