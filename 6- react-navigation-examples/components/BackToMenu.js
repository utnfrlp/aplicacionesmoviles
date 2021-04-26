import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";
import * as Updates from "expo-updates";

class BackToMenu extends React.Component {
  constructor(props) {
    super(props);

    this.goToMenu = this.goToMenu.bind(this);
  }

  goToMenu() {
    // Go back anywhere
    Updates.reloadAsync();
  }

  render() {
    return (
      <TouchableHighlight onPress={this.goToMenu}>
        <Text style={styles.link}>Menú</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    color: "#e74c3c",
    fontSize: 17,
    fontWeight: "500",
    padding: 10,
  },
});

export default BackToMenu;
