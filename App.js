import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import NewsPage from './screens/NewsPage';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  NewsPage: {
    screen: NewsPage
  }
}, {
  initialRootName: 'Home'
});

export default RootStack;