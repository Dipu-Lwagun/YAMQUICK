import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import StackNavigation from './src/navigation/stackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StackNavigation />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
