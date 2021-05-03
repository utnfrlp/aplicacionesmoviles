import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Counter from './components/Counter';
import store from './state/store';

class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <View style={styles.container}>
          <Text style={styles.title}>Redux</Text>

          <Counter />
        </View>
      </ReduxProvider>
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
