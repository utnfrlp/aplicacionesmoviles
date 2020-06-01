import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuHeader = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      React Navigation examples
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dadada',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: 20,
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default MenuHeader;
