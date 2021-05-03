import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const LinkToExample = props => (
  <View style={styles.buttonContainer}>
    <Button
      title={props.title}
      color={props.color}
      onPress={props.onPress}
    />
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#eaeaea',
    padding: 10,
    marginTop: 8
  },
});

export default LinkToExample;
