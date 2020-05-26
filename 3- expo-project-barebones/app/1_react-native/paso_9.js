import React from 'react';
import {
  View, ScrollView, Text, Button, StyleSheet,
  AsyncStorage, // https://facebook.github.io/react-native/docs/asyncstorage.html
} from 'react-native';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };

    // cada item va a tener el formato:
    // ['clave (key)', 'valor (item)']

    this.getItems = this.getItems.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.clearItems = this.clearItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, items) => {
        console.log('Items recibidos:');
        items.map((item) => {
          // get at each item's key/value so you can work with it
          const key = item[0];
          const value = item[1];

          console.log(`Item: (${key}, ${value})`);
        });

        this.setState({
          items,
        });
      });
    });
  }

  saveItem() {
    const date = new Date();
    const key = date.toISOString();
    const value = 'item';

    console.log(`Guardando nuevo item: (${key}, ${value})`)
    AsyncStorage.setItem(key, value, (err) => {
      if (err) {
        console.log(`ERROR: ${err}`);
      }
    });

    this.setState({
      items: [...this.state.items, [key, 'item']],
    });
  }

  clearItems() {
    console.log('borrando items...');

    AsyncStorage.clear((err) => {
      if (err) {
        console.log(`ERROR: ${err}`);
      }
    });

    this.setState({
      items: [],
    });
  }

  render() {
    const { items } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          <Text style={styles.title}>
            AsyncStorage
          </Text>

          <ScrollView>
          { items.length ?
            items.map((item, pos) => (
              <Text key={item[0]} style={styles.item}>
                {pos + 1}) {item[1]}
              </Text>
              )) :
            <Text>No se encontraron items en AsyncStorage.</Text>
          }
          </ScrollView>
        </View>

        <Button
          title="Guardar nuevo item"
          onPress={this.saveItem}
        />

        <Button
          color={'red'}
          title="Borrar items"
          onPress={this.clearItems}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 10,
  },

  itemsContainer: {
    flex: 1,
  },

  item: {
    color: '#555',
    backgroundColor: '#eee',
    fontSize: 14,
    fontWeight: '700',
    padding: 10,
    marginVertical: 2,
  },
});

export default App;
