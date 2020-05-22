import React from 'react';
import {View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Simple from './components/Simple';
import Message from './components/Message';
import List from './components/List';
import Display from './components/Display';
import ModalDate from './components/ModalDate';
import Swipeable from './components/Swipeable';

const style = {flex: 1, alignItems: 'center', justifyContent: 'center'};

const Foo = () => {
  return (
    <View style={style}>
      <Simple text="Foo component" />
    </View>
  );
};

const Bar = ({navigation}) => (
  <View style={style}>
    <Simple text="Bar component" />
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);

const Details = () => (
  <View style={style}>
    <Simple text="Details example" />
  </View>
);

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
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
};
