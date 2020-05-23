import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Foo from './components/Foo';
import Bar from './components/Bar';
import Message from './components/Message';
import List from './components/List';
import Display from './components/Display';
import ModalDate from './components/ModalDate';
import Swipeable from './components/Swipeable';

const {Navigator, Screen} = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Swipeable" component={Swipeable} />
        <Screen name="ModalDate" component={ModalDate} />
        <Screen name="Display" component={Display} />
        <Screen name="List" component={List} />
        <Screen name="Message" component={Message} />
        <Screen name="Foo" component={Foo} />
        <Screen name="Bar" component={Bar} options={{title: 'New Bar'}} />
      </Navigator>
    </NavigationContainer>
  );
};
