import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { counterActions } from '../state/actions';

class CounterContainer extends React.Component {
  renderCounter() {
    const { counter, increaseCounter, decreaseCounter } = this.props;

    return counter.items.map((item, index) => (
      <View key={index} style={styles.container} >
        <Text style={styles.index}> {index + 1} </Text>

        <Text style={styles.counter}> {item} </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonAdd} onPress={() => increaseCounter(index)} >
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRemove} onPress={() => decreaseCounter(index)} >
            <Text style={styles.icon}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      ));
  }

  render() {
    return (
      <View>
        {this.renderCounter()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increaseCounter: counterActions.increaseCounter,
  decreaseCounter: counterActions.decreaseCounter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
