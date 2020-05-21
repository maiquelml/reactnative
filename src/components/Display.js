import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image, // There is the ImageBackground
} from 'react-native';

import png from '../../assets/png.png';

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  display: {
    fontSize: 25,
    lineHeight: 25,
    backgroundColor: '#D3D3D3',
    textAlign: 'center',
    padding: 20,
    borderColor: '#888',
    borderWidth: 1,
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    height: Dimensions.get('window').width / 4,
  },
  inputEmpty: {
    color: '#888',
  },
  img: {
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode: 'contain',
    marginTop: 5,
    maxHeight: 25,
  },
});

class Display extends Component {
  state = {
    displayValue: 'Aa',
    emptyValue: true,
  };

  onChangeText = (text) => {
    if (text) {
      this.setState({displayValue: text, emptyValue: false});
    } else {
      this.setState({displayValue: 'Aa', emptyValue: true});
    }
  };

  render() {
    // console.error('ASAAAAAAAAAA');
    return (
      <>
        <Image source={png} style={styles.img} />
        <Text style={styles.title}>Text Default</Text>
        <Text
          style={[
            styles.display,
            this.state.emptyValue ? styles.inputEmpty : null,
          ]}>
          {this.state.displayValue}
        </Text>
        <Text style={styles.title}>Text with numberOfLines prop</Text>
        <Text
          style={[
            styles.display,
            this.state.emptyValue ? styles.inputEmpty : null,
          ]}
          numberOfLines={1}>
          {this.state.displayValue}
        </Text>
        <Text style={styles.title}>Input with style of Dimensions method</Text>
        <TextInput style={styles.input} onChangeText={this.onChangeText} />
      </>
    );
  }
}

export default Display;
