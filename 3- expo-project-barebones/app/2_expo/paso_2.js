import React from 'react';
import {
  View, Button, Image,
  StatusBar, StyleSheet,
} from 'react-native';

import { BlurView } from 'expo-blur';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showBlur: false,
    };

    this.toggleBlur = this.toggleBlur.bind(this);
  }

  toggleBlur() {
    this.setState({
      showBlur: !this.state.showBlur,
    });
  }

  render() {
    const { showBlur } = this.state;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://user-images.githubusercontent.com/7065401/82854724-b3396480-9edf-11ea-9cb0-3da320cddcc6.png' }}
        />

        <BlurView
          // default, light, dark
          tint="dark"
          intensity={showBlur ? 60 : 0}
          style={[styles.blurContainer, StyleSheet.absoluteFill]}
        >
          <Button
            onPress={this.toggleBlur}
            color={showBlur ? 'red' : 'blue'}
            title={showBlur ? 'Remover BlurView' : 'Agregar BlurView'}
          />
        </BlurView>

        <StatusBar hidden />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  blurContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: 400,
  },
});

export default App;
