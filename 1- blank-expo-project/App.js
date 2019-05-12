import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import Header from './components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
  }

  add() {
    const { count } = this.state;

    this.setState({
      count: count + 1
    })
  }

  remove() {
    const { count } = this.state;

    this.setState({
      count: count - 1
    })
  }
  
  render() {
    const { count } = this.state;

    return (
      <View style={styles.container}>
        <Image source={require('./assets/icon.png')} style={styles.image} />

        <Header title="My first app" subtitle="description of my app" />
        
        <Text style={{ color: '#FFF', fontSize: 36, fontWeight: '900', marginTop: 50 }}>
          {count}
        </Text>
        
        <Button
          title="Sumar"
          color="#27ae60"
          onPress={this.add}
          style={{ padding: 5 }}
        />
        <Button
          title="Restar"
          color="#e74c3c"
          onPress={this.remove}
          style={{ padding: 5 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginBottom: 20
  }
});
