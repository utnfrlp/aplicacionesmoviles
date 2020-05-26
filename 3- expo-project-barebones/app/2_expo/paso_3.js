import React from 'react';
import {
  View, Text, StyleSheet,
  Platform, Button,
} from 'react-native';

import { Updates } from 'expo';
import Constants from 'expo-constants';
import * as Localization from 'expo-localization';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      locale: null,
    };

    this.getLocale = this.getLocale.bind(this);
  }

  async getLocale() {
    const { locale } = await Localization.getLocalizationAsync();

    this.setState({ locale });
  }

  reload() {
    Updates.reload();
  }

  render() {
    const {
      appOwnership, expoVersion, deviceName,
      deviceYearClass, isDevice, platform,
    } = Constants;

    const { locale } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          expo-constants
        </Text>

        <Text>appOwnership: {appOwnership}</Text>
        <Text>expoVersion: {expoVersion}</Text>
        <Text>deviceName: {deviceName}</Text>
        <Text>deviceYearClass: {deviceYearClass}</Text>
        <Text>isDevice: {isDevice ? 'true' : 'false'}</Text>
        { Platform.OS === 'ios' && <Text>platform: {platform.ios.platform}</Text> }
        { Platform.OS === 'ios' && <Text>model: {platform.ios.model}</Text> }

        <Text style={styles.title}>
          expo-localization
        </Text>

        <Button onPress={this.getLocale} title={'getLocalizationAsync'} />
        <Text>Idioma del dispositivo: {locale || 'desconocido'}</Text>

        <Text style={styles.title}>
          expo.Updates.reload();
        </Text>

        <Button onPress={this.reload} title={'Reload app'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
