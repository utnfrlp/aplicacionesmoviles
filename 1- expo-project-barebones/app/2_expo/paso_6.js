import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet, Alert } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";

const App = () => {
  const [hasPerm, setHasPerm] = useState(true);
  const [cancelled, setCancelled] = useState(true);
  const [uri, setUri] = useState(null);
  const [camera, setCamera] = useState(null);

  const getCameraPerm = async () => {
    const { status } = await Camera.getPermissionsAsync();

    if (status === "denied") {
      Alert.alert(
        "Please allow Camera permission from your phone configuration"
      );
    } else {
      const { status } = await Camera.requestPermissionsAsync();

      if (status === "granted") {
        setHasPerm(true);
      } else {
        Alert.alert(
          "Please allow Camera permission from your phone configuration"
        );
      }
    }
  };

  const getMediaLibraryPerm = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();

    if (status === "denied") {
      Alert.alert(
        "Please allow Album permission from your phone configuration"
      );
    } else {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status === "granted") {
        setHasPerm(true);
      } else {
        Alert.alert(
          "Please allow Album permission from your phone configuration"
        );
      }
    }
  };

  const takePhoto = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync();

      setUri(photo.uri);
    }
  };

  const openImageLibrary = async () => {
    const options = {
      allowsEditing: true,
      aspect: [4, 3],
    };

    const image = await ImagePicker.launchImageLibraryAsync(options);
    const { cancelled, uri } = image;

    if (!cancelled) {
      setCancelled(cancelled);
      setUri(uri);
    }
  };

  useEffect(() => {
    getCameraPerm();
    getMediaLibraryPerm();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>expo-image-picker</Text>

      <View style={styles.cameraBox}>
        <Camera
          ref={(ref) => {
            setCamera(ref);
          }}
        />
      </View>
      {uri && <Image source={{ uri }} style={styles.image} />}

      <Button onPress={takePhoto} title={"Sacar foto"} />
      <Button onPress={openImageLibrary} title={"Abrir librería de imágenes"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: 20,
    marginBottom: 10,
  },
  cameraBox: {
    width: 150,
    height: 150,
  },
  image: {
    width: 400,
    height: 400,
    border: "5px solid #2ecc71",
  },
});

export default App;
