import React from 'react';
import {View, Button} from 'react-native';

import Simple from './Simple';
import Default from '../style/Default';

const Bar = ({navigation}) => {
  return (
    <View style={Default.init}>
      <Simple text="Bar component" />
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default Bar;
