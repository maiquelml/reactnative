import React from 'react';
import {
  View,
  Button,
  Alert,
  ToastAndroid,
  Platform,
  TouchableHighlight,
  Text,
} from 'react-native';

const style = {flex: 1, alignItems: 'center', justifyContent: 'center'};
const styleButton = {
  backgroundColor: 'rgb(43, 125, 233)',
  width: 200,
  height: 40,
  borderRadius: 3,
};
const fontButton = {
  fontSize: 14,
  color: 'white',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: 10,
};

const Message = () => {
  const notify = (msg) =>
    Platform.OS === 'android'
      ? ToastAndroid.show(msg, ToastAndroid.LONG)
      : Alert.alert('Information', 'Verify plataform.');

  const customNotify = (msg, time, position) => {
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravity(
        msg,
        ToastAndroid[time],
        ToastAndroid[position],
      );
    } else {
      Alert.alert('Information', 'Verify plataform.');
    }
  };

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
          }>
          <View style={styleButton}>
            <Text style={fontButton}>Notify message TOP</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={style}>
        <TouchableHighlight
          onPress={() =>
            customNotify('This is a message BOTTOM', 'SHORT', 'BOTTOM')
          }
          onLongPress={() =>
            customNotify('This is a message BOTTOM', 'LONG', 'BOTTOM')
          }>
          <View style={styleButton}>
            <Text style={fontButton}>Notify message Bottom</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Message;
