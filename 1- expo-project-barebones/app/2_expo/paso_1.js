import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";

import { Audio } from "expo-av";

const App = () => {
  const [sound, setSount] = useState(new Audio.Sound());

  const playSound = async () => {
    const status = await sound.getStatusAsync();

    if (status.isLoaded) {
      await sound.setPositionAsync(0);
      await sound.playAsync();
    } else {
      await sound.loadAsync(require("../../assets/furrow.mp3"));
      await sound.playAsync();
    }
  };

  useEffect(() => {
    // El módulo Audio está desabilitado por default, hay que activarlo explícitamente.
    Audio.setIsEnabledAsync(true);

    // More options
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: true,
      staysActiveInBackground: true,
    });
  });

  return (
    <View style={styles.container}>
      <Button color={"#16a085"} onPress={playSound} title="Reproducir sonido" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
