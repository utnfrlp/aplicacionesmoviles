import React from 'react';
import {
  View, // https://facebook.github.io/react-native/docs/view.html
  Text, // https://facebook.github.io/react-native/docs/text.html
  StyleSheet, // https://facebook.github.io/react-native/docs/stylesheet.html
  Image, // https://facebook.github.io/react-native/docs/image.html
  Button, // https://facebook.github.io/react-native/docs/button.html
  TextInput, // https://facebook.github.io/react-native/docs/textinput.html
  Dimensions, // https://facebook.github.io/react-native/docs/dimensions.html
} from 'react-native';

import CustomButton from '../../components/CustomButton';

const fullWidth = Dimensions.get('window').width;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'Hola!',
      input: ''
    };

    this.resetInput = this.resetInput.bind(this);
  }

  resetInput() {
    this.setState({
      input: '',
    });
  }

  render() {
    const { title, input } = this.state;

    return (
      <View style={styles.container}>
        <View style={[styles.section]}>
          <Image
            style={styles.logo}
            source={require('../../assets/icon.png')}
          />

          <Text style={styles.textLarge}>
            {title}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={
            styles.showInput,
            {'color': input.length < 10 ? 'red' : 'green'}
          }>
            Texto ingresado: {input} ({input ? input.length : 'vacío'})
          </Text>

          <TextInput
            style={styles.textInput}
            onChangeText={input => this.setState({ input })}
            value={this.state.input}
            autoCorrect={false}
            placeholder={'Ingrese un texto aquí'}
            underlineColorAndroid={'transparent'}
            keyboardAppearance={'dark'}
            returnKeyType={'send'}
          />
        </View>

        <View style={styles.section}>
          <Button
            onPress={this.resetInput.bind(this)}
            title="Limpiar"
            color={'#16a085'}
            accessibilityLabel="See an informative alert"
          />

          <CustomButton
            onPress={this.resetInput}
            title="Limpiar"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  textLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  textSmall: {
    color: '#34495e',
    fontStyle: 'italic',
    paddingBottom: 5,
  },
  textInput: {
    height: 30,
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
    width: fullWidth - 20,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5,
  },
  showInput: {
    alignSelf: 'flex-start',
    marginBottom: 20
  }
});

export default App;
