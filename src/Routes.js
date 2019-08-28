import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import MainScreen from './pages/MainScreen';

export default () => (
  <Router>
    <Scene key="root" hideNavBar={true}>
      <Scene key="login" component={Login} title="Login" initial={true} />
      <Scene key="signup" component={Signup} title="Signup"/>
      <Scene key="MainScreen" component={MainScreen} title="MainScreen"/>
    </Scene>
  </Router>
);