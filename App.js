import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import Store from './src/redux/store';
import {Provider as ReduxProvider} from 'react-redux';

const App = () => {
  return (
    <ReduxProvider store={Store()}>
      <NavigationContainer>
        <OrientationLocker
          orientation={PORTRAIT}
          // onChange={orientation => console.log('onChange', orientation)}
          // onDeviceChange={orientation =>
          //   console.log('onDeviceChange', orientation)
          // }
        />
        <Navigation />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
