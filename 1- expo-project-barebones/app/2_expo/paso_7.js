import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

import { WebView } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";

const App = () => {
  const [result, setResult] = useState(null);

  const handlePressButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync("https://www.google.com/");
    setResult(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>expo-web-browser</Text>

      <Button
        style={styles.paragraph}
        title="Abrir WebBrowser"
        onPress={handlePressButtonAsync}
      />

      <Text>{result && JSON.stringify(result)}</Text>

      <Text style={styles.title}>React Native WebView</Text>

      <View style={styles.webviewContainer}>
        <WebView source={{ uri: "https://www.google.com/" }} scalesPageToFit />
      </View>
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
  webviewContainer: {
    height: 450,
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default App;
