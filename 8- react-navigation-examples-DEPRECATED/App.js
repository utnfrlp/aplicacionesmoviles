import React from 'react';
import { createAppContainer } from 'react-navigation';
import Menu from './navigators/Menu';

const AppContainer = createAppContainer(Menu);

class App extends React.Component {
  render() {
    return (
      <AppContainer
        onNavigationStateChange={() => ({ /* don't show navigation change logs */ })}
      />
    );
  }
}

export default App;
