import React from 'react';
import {
  Button, Text, View, StyleSheet,
  WebView, // https://facebook.github.io/react-native/docs/webview.html
} from 'react-native';

import * as WebBrowser from 'expo-web-browser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: null,
    };

    this.handlePressButtonAsync = this.handlePressButtonAsync.bind(this);
  }

  async handlePressButtonAsync() {
    const result = await WebBrowser.openBrowserAsync('https://www.google.com/');
    this.setState({ result });
  }

  render() {
    const { cancelled, fileSize, uri } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          expo-web-browser
        </Text>

        <Button
          style={styles.paragraph}
          title="Open WebBrowser"
          onPress={this.handlePressButtonAsync}
        />

        <Text>{this.state.result && JSON.stringify(this.state.result)}</Text>

        <Text style={styles.title}>
         React Native WebView
       </Text>

        <View style={styles.webviewContainer}>
          <WebView
            source={{ uri: 'https://www.google.com/' }}
            scalesPageToFit
          />
        </View>
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
  webviewContainer: {
    height: 450,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default App;
