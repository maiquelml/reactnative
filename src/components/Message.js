import React from 'react'
import {
  View,
  Button,
  Alert,
  ToastAndroid,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
} from 'react-native'

const style = {flex: 1, alignItems: 'center', justifyContent: 'center'}
const styleButton = {
  backgroundColor: 'rgb(43, 125, 233)',
  paddingLeft: 15,
  paddingRight: 15,
  height: 40,
  borderRadius: 3,
}
const fontButton = {
  fontSize: 14,
  color: 'white',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: 10,
}

const Message = () => {
  const notify = (msg) =>
    Platform.OS === 'android'
      ? ToastAndroid.show(msg, ToastAndroid.LONG)
      : Alert.alert('Information', 'Verify plataform.')

  const customNotify = (msg, time, position) => {
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravity(
        msg,
        ToastAndroid[time],
        ToastAndroid[position],
      )
    } else {
      Alert.alert('Information', 'Verify plataform.')
    }
  }

  return (
    <>
      <View style={style}>
        <Button
          title={'What plataform?'}
          onPress={() => notify('Congratulations. Your phone is Android.')}
        />
      </View>
      <View style={style}>
        <TouchableHighlight
          onPress={() => customNotify('This is a message TOP', 'SHORT', 'TOP')}
          onLongPress={() =>
            customNotify('This is a message TOP', 'LONG', 'TOP')
          }
          style={styleButton}>
          <Text style={fontButton}>Notify TOP Highlight</Text>
        </TouchableHighlight>
      </View>
      <View style={style}>
        <TouchableOpacity
          onPress={() =>
            customNotify('This is a message BOTTOM', 'SHORT', 'BOTTOM')
          }
          onLongPress={() =>
            customNotify('This is a message BOTTOM', 'LONG', 'BOTTOM')
          }
          style={styleButton}>
          <Text style={fontButton}>Notify Bottom with Opacity</Text>
        </TouchableOpacity>
      </View>
      <View style={style}>
        <TouchableWithoutFeedback
          onLongPress={() =>
            Alert.alert(
              'Information',
              'Message Button Without Feedback and long press',
            )
          }>
          <View style={styleButton}>
            <Text style={fontButton}>Notify Without Feedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  )
}

export default Message
