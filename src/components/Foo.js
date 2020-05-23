import React from 'react';
import {View, Button} from 'react-native';

import Simple from './Simple';
import Default from '../style/Default';

const Foo = ({navigation}) => (
  <View style={Default.init}>
    <Simple text="Foo component" />
    <Button title="Go to Bar" onPress={() => navigation.navigate('Bar')} />
  </View>
);

export default Foo;
