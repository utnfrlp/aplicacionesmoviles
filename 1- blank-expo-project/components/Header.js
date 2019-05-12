import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
  <View>
    <Text style={styles.paragraph}>
      {props.title}
    </Text>

    <Text style={{ color: '#FFF', fontSize: 18 }}>
      {props.subtitle}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  paragraph: {
    margin: 10,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#eee',
  }
});

export default Header;