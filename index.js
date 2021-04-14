// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

/**
 * @format
 */

import { Navigation } from 'react-native-navigation';

//import App from './src/app';

//import AsyncStorage from '@react-native-community/async-storage';

import { registerScreens } from './src/navigation/registerScreens';
import { introScreen, homeScreen, loginScreen, registerScreen } from './src/navigation/pushScreens';
import Intro from './src/screens/Authentic/Intro/Intro';
registerScreens();

Navigation.registerComponent('app', () => App);
Navigation.registerComponent('Intro', () => Intro);

Navigation.events().registerAppLaunchedListener(async () => {
  //const start = await AsyncStorage.getItem('start');
  homeScreen();
});
