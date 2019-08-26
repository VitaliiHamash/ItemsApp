import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';

export default () => (
  <Router>
    <Scene key="root" hideNavBar={true}>
      <Scene key="login" component={Login} title="Login" initial={true} />
      <Scene key="signup" component={Signup} title="Signup"/>
    </Scene>
  </Router>
);