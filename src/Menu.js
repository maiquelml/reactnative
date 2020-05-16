import React from 'react';
import {View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Simple from './components/Simple';

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

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Foo" component={Foo} />
        <Drawer.Screen
          name="Bar"
          component={Bar}
          options={{title: 'New Bar'}}
        />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
