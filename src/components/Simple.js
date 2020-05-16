import React from 'react';
import {Text} from 'react-native';

import Default from '../style/Default';

const Simple = ({text}) => {
  return <Text style={Default.ex}>{text}</Text>;
};

export default Simple;
