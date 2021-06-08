/* eslint-disable prettier/prettier */
/* eslint-disable handle-callback-err */
// import { Navigation } from 'react-native-navigation';
// import { Alert } from 'react-native';
// import { registerScreens } from './navigation/index';
// import configureStore from './redux/store';
// import { startup } from './redux/AppRedux/actions';

// export let store = null;

// const App = () => {
//   const loadInitial = () => {
//     return Promise.all([loadStore()])
//       .then((response) => {
//         store = response[0];
//         store.dispatch(startup());
//       })
//       .catch((err) => {});
//   };

//   const loadStore = async () => {
//     return new Promise((resolve) => {
//       configureStore((tempStore, persistor) => {
//         // configI18n(get(tempStore.getState(), 'app.language'));
//         registerScreens(tempStore, persistor);
//         resolve(tempStore, persistor);
//       });
//     });
//   };

//   Navigation.events().registerAppLaunchedListener(async () => {
//     try {
//       await loadInitial();
//       Navigation.setDefaultOptions({
//         layout: {
//           backgroundColor: 'white',
//           orientation: ['portrait'], // An array of supported orientations
//         },
//       });
//     } catch (error) {
//       //
//       Alert.alert('Init unsuccessful', error.message);
//     }
//   });
// };

// export default App;

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './navigation/registerScreens';
import { startup } from './redux/AppRedux/actions';
import store from './redux/store';
import { introScreen } from './navigation/pushScreens';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    try {
      await registerScreens();
      const skip = await AsyncStorage.getItem('skip');
      if (JSON.parse(skip)) {
        await store.dispatch(startup());
      } else {
        introScreen();
      }
    } catch (error) {
      console.log('Init unsuccessful', error.message);
    }
  });
};

export default App;
