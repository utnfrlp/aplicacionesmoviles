import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

class StackScreen2 extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    // this.props.navigation.navigate('Stack1');

    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Modificar en <Text style={{fontStyle: 'italic'}}>screens/StackScreen1.js</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.goBack}
            color={'#242134'}
            title="Volver a Pantalla 1"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20
  },

  image: {
    width: 80,
    height: 80,
  },

  text: {
    color: '#242134',
    textAlign: 'center',
    fontSize: 16,
  },

  buttonContainer: {
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 10
  },
});

export default StackScreen2;
