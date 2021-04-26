import React, { useState } from "react";
import { View, Button, Image, StatusBar, StyleSheet } from "react-native";

import { BlurView } from "expo-blur";

const App = () => {
  const [showBlur, setBlur] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://user-images.githubusercontent.com/7065401/82854724-b3396480-9edf-11ea-9cb0-3da320cddcc6.png",
        }}
      />

      <BlurView
        // default, light, dark
        tint="dark"
        intensity={showBlur ? 60 : 0}
        style={[styles.blurContainer, StyleSheet.absoluteFill]}
      >
        <Button
          onPress={() => setBlur(!showBlur)}
          color={showBlur ? "red" : "blue"}
          title={showBlur ? "Remover BlurView" : "Agregar BlurView"}
        />
      </BlurView>

      <StatusBar hidden />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  blurContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: 400,
  },
});

export default App;
