import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import StackNavigation from './src/navigation/stackNavigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StackNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
