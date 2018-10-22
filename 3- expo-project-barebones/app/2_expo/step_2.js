import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

// https://docs.expo.io/versions/v16.0.0/sdk/audio.html
import { Audio } from 'expo';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sound: new Audio.Sound(),
    };

    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    // Audio is disabled by default, so your app must enable it explicitly.
    Audio.setIsEnabledAsync(true);

    // More options
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: true
    });
  }

  async playSound() {
    const { sound } = this.state;
    const status = await sound.getStatusAsync();

    if (status.isLoaded) {
      await sound.setPositionAsync(0);
      await sound.playAsync();
    } else {
      await sound.loadAsync(require('../../assets/furrow.mp3'));
      await sound.playAsync();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          color={'#16a085'}
          onPress={this.playSound}
          title="Play sound"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
