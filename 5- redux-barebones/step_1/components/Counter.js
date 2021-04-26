import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decreaseCounter() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <View style={styles.counterContainer}>
        <Text style={styles.counter}> { counter } </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonAdd} onPress={this.increaseCounter} >
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRemove} onPress={this.decreaseCounter} >
            <Text style={styles.icon}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    borderBottomWidth: 2,
    borderColor: '#e1e1e1',
    marginVertical: 10,
  },

  index: {
    color: '#999',
    paddingLeft: 7,
    paddingBottom: 50,
  },

  counter: {
    flex: 1,
    color: '#2c3e50',
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

  buttonAdd: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },

  buttonRemove: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },

  icon: {
    color: '#2c3e50',
    fontSize: 45,
  },
});

export default Counter;
