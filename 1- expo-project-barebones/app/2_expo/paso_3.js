import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, Button } from "react-native";

import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Localization from "expo-localization";

const App = () => {
  const [locale, setLocale] = useState(null);

  const getLocale = async () => {
    const { locale } = await Localization.getLocalizationAsync();

    setLocale(locale);
  };

  const { appOwnership, expoVersion, deviceName } = Constants;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>expo-constants</Text>

      <Text>appOwnership: {appOwnership}</Text>
      <Text>expoVersion: {expoVersion}</Text>
      <Text>deviceName: {deviceName}</Text>

      <Text style={styles.title}>expo-device</Text>

      <Text>isDevice: {Device.isDevice ? "true" : "false"}</Text>
      <Text>brand: {Device.brand}</Text>
      <Text>manufacturer: {Device.manufacturer}</Text>
      <Text>modelName: {Device.modelName}</Text>
      <Text>modelId: {Device.modelId}</Text>
      <Text>osName: {Device.osName}</Text>
      <Text>osVersion: {Device.osVersion}</Text>
      <Text>deviceYearClass: {Device.deviceYearClass}</Text>
      <Text>totalMemory: {Device.totalMemory}</Text>

      <Text style={styles.title}>expo-localization</Text>

      <Button onPress={getLocale} title={"getLocalizationAsync"} />
      <Text>Idioma del dispositivo: {locale || "desconocido"}</Text>
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
});

export default App;
