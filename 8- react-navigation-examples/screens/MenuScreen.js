import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MenuHeader from '../components/MenuHeader';
import LinkToExample from '../components/LinkToExample';

class MenuScreen extends React.Component {
  constructor(props) {
    super(props);

    this.goToStackNavigationDemo = this.goToStackNavigationDemo.bind(this);
    this.goToTabNavigationDemo = this.goToTabNavigationDemo.bind(this);
    this.goToDrawerNavigationDemo = this.goToDrawerNavigationDemo.bind(this);
    this.goToStackNavigationParamsDemo = this.goToStackNavigationParamsDemo.bind(this);
  }

  goToStackNavigationDemo() {
    // usamos "replace" y no "navigate" en este caso para que no se pueda volver atrás
    this.props.navigation.replace('StackNavigationDemo');
  }

  goToTabNavigationDemo() {
    this.props.navigation.replace('TabNavigationDemo');
  }

  goToDrawerNavigationDemo() {
    this.props.navigation.replace('DrawerNavigationDemo');
  }

  goToStackNavigationParamsDemo() {
    // estos parámetros son válidos también con el método "navigate"
    this.props.navigation.replace('StackNavigationDemo', {
      screen: 'Stack1',
      params: {
        name: 'Juan',
        other: 1234
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuHeader />
        
        <ScrollView style={styles.itemsContainer}>
          <LinkToExample
            title={'Stack navigation demo'}
            color={'#3498db'}
            onPress={this.goToStackNavigationDemo}
          />

          <LinkToExample
            title={'Tab navigation demo'}
            color={'#2ecc71'}
            onPress={this.goToTabNavigationDemo}
          />

          <LinkToExample
            title={'Drawer navigation demo'}
            color={'#e74c3c'}
            onPress={this.goToDrawerNavigationDemo}
          />

          <LinkToExample
            title={'Stack navigation with params demo'}
            color={'#e67e22'}
            onPress={this.goToStackNavigationParamsDemo}
          />
        </ScrollView>
      </View>
    );
  }
}

MenuScreen.navigationOptions = {
  title: 'Menu',
  gesturesEnabled: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsContainer: {
    backgroundColor: '#fafafa',
    borderBottomWidth: 15,
    borderColor: '#242134',
  },
});

export default MenuScreen;
