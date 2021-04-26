import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, Button } from "react-native";

import Constants from "expo-constants";
import * as Localization from "expo-localization";

const App = () => {
  const [locale, setLocale] = useState(null);

  const getLocale = async () => {
    const { locale } = await Localization.getLocalizationAsync();

    setLocale(locale);
  };

  const {
    appOwnership,
    expoVersion,
    deviceName,
    deviceYearClass,
    isDevice,
    platform,
  } = Constants;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>expo-constants</Text>

      <Text>appOwnership: {appOwnership}</Text>
      <Text>expoVersion: {expoVersion}</Text>
      <Text>deviceName: {deviceName}</Text>
      <Text>deviceYearClass: {deviceYearClass}</Text>
      <Text>isDevice: {isDevice ? "true" : "false"}</Text>
      {Platform.OS === "ios" && <Text>platform: {platform.ios.platform}</Text>}
      {Platform.OS === "ios" && <Text>model: {platform.ios.model}</Text>}

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
