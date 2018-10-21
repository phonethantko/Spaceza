import React from 'react';
import { Alert, StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import WelcomePage from './src/WelcomePage'
import LandingPage from './src/LandingPage'
import CameraPage from './src/CameraPage'
import FilterSelectionPage from './src/FilterSelectionPage'
import FinalPage from './src/FinalPage'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomePage
  },
  Landing: {
    screen: LandingPage
  },
  Camera: {
    screen: CameraPage
  },
  Filter: {
    screen: FilterSelectionPage
  },
  Final: {
    screen: FinalPage
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
