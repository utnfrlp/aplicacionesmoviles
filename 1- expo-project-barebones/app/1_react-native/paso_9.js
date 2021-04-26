import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Button, StyleSheet } from "react-native";
// https://react-native-async-storage.github.io/async-storage/docs/usage/
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, items) => {
        console.log("Items recibidos:");
        items.map((item) => {
          // get at each item's key/value so you can work with it
          const key = item[0];
          const value = item[1];

          console.log(`Item: (${key}, ${value})`);
        });

        setItems(items);
      });
    });
  };

  const saveItem = () => {
    const date = new Date();
    const key = date.toISOString();
    const value = "item";

    console.log(`Guardando nuevo item: (${key}, ${value})`);
    AsyncStorage.setItem(key, value, (err) => {
      if (err) {
        console.log(`ERROR: ${err}`);
      }
    });

    setItems([...items, [key, "item"]]);
  };

  const clearItems = () => {
    console.log("borrando items...");

    AsyncStorage.clear((err) => {
      if (err) {
        console.log(`ERROR: ${err}`);
      }
    });

    setItems([]);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <Text style={styles.title}>AsyncStorage</Text>

        <ScrollView>
          {items.length ? (
            items.map((item, pos) => (
              <Text key={item[0]} style={styles.item}>
                {pos + 1}) {item[1]}
              </Text>
            ))
          ) : (
            <Text>No se encontraron items en AsyncStorage.</Text>
          )}
        </ScrollView>
      </View>

      <Button title="Guardar nuevo item" onPress={saveItem} />

      <Button color={"red"} title="Borrar items" onPress={clearItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: 20,
    marginBottom: 10,
  },

  itemsContainer: {
    flex: 1,
  },

  item: {
    color: "#555",
    backgroundColor: "#eee",
    fontSize: 14,
    fontWeight: "700",
    padding: 10,
    marginVertical: 2,
  },
});

export default App;
