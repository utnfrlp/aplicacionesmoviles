import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 42}}>
        ✨
      </Text>

      <Text style={{fontSize: 28, fontWeight: '900', textTransform: 'uppercase', marginBottom: 20}}>
        Mi primera app!
      </Text>
      
      <Text >
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(26, 188, 156, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
