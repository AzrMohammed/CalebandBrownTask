/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import AppStack from './src/routes/AppStack';
import {store} from './src/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </>
  );
};

export default App;
