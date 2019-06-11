import React from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

import * as DocumentPicker from 'expo-document-picker'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: null,
      size: null,
      uri: null,
    };

    this.getDocument = this.getDocument.bind(this);
  }

  async getDocument() {
    const options = {
      type: '*/*',
    };

    const { type, name, size, uri } = await DocumentPicker.getDocumentAsync(options);

    if (type === 'success') {
      this.setState({ name, size, uri });
    }
  }

  render() {
    const { name, size, uri } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          expo-document-picker DocumentPicker
        </Text>

        <Button onPress={this.getDocument} title={'getDocumentAsync'} />

        { name && <Text>name: {name}</Text> }
        { size && <Text>size: {size}</Text> }
        { uri && <Text>uri: {uri}</Text> }
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
