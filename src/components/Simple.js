import React from 'react'
import {Text} from 'react-native'

import Default from '../style/Default'

const Simple = ({text, style, ...props}) => {
  return (
    <Text style={{...Default.ex, ...style}} {...props}>
      {text}
    </Text>
  )
}

export default Simple
