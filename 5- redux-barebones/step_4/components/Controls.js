import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { counterActions } from '../state/actions';

class Controls extends React.Component {
  render() {
    const { addCounter, removeCounter } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={addCounter} >
          <Text style={styles.text}> Add counter </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={removeCounter} >
          <Text style={styles.text}> Remove counter </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#4A6075',
  },

  button: {
    backgroundColor: '#2c3e50',
    padding: 15,
  },

  text: {
    color: '#fff',
    fontWeight: '700',
  },
});

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  addCounter: counterActions.addCounter,
  removeCounter: counterActions.removeCounter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);
