import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import MapView from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const App = () => {
  const [latitude, setLatitude] = useState(37.78825);
  const [longitude, setLongitude] = useState(-122.4324);

  const getPositionPerm = async () => {
    const options = {
      enableHighAccuracy: true,
    };

    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status === "denied") {
      Alert.alert(
        "Please allow Location permission from your phone configuration"
      );
    } else {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status === "granted") {
        const response = await Location.getCurrentPositionAsync(options);

        setLatitude(response.coords.latitude);
        setLongitude(response.coords.longitude);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>react-native-maps MapView</Text>

      <MapView
        style={{ flex: 1 }}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title={"Title"}
          description={"Description"}
        />
        <MapView.Marker
          coordinate={{
            latitude: latitude + 0.005,
            longitude: longitude + 0.005,
          }}
          title={"Title"}
          description={"Description"}
        />
        <MapView.Marker
          coordinate={{
            latitude: latitude - 0.005,
            longitude: longitude - 0.01,
          }}
          title={"Title"}
          description={"Description"}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: 70,
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default App;
