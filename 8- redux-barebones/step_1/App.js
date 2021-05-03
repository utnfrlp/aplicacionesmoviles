import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Sin Redux </Text>

        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  title: {
    color: '#2c3e50',
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;
