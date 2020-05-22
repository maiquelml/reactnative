import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from 'moment';
import 'moment/locale/pt-br';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  background: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
  },
  modal: {
    backgroundColor: '#fff',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    flex: 1,
    alignSelf: 'flex-end',
    color: '#FFE4E1',
    fontWeight: 'bold',
    padding: 20,
  },
  contentModal: {
    flex: 9,
    justifyContent: 'center',
  },
});

class ModalDate extends Component {
  state = {
    isVisible: false,
    showDatePicker: false,
    date: new Date(),
  };

  onToggle = () => this.setState({isVisible: !this.state.isVisible});

  getDatePicker = () => (
    <DateTimePicker
      value={this.state.date}
      onChange={(_, date) =>
        this.setState({date, showDatePicker: false, isVisible: false})
      }
      mode="date"
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <Modal transparent visible={this.state.isVisible} mode="slide">
          <TouchableWithoutFeedback onPress={this.onToggle}>
            <View style={styles.background} />
          </TouchableWithoutFeedback>
          <View style={styles.modal}>
            <View style={styles.contentModal}>
              <Button
                title="Inserir data"
                onPress={() => this.setState({showDatePicker: true})}
              />
              {this.state.showDatePicker && this.getDatePicker()}
            </View>
            <View style={styles.cancelButton}>
              <TouchableOpacity onPress={this.onToggle}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={this.onToggle}>
            <View style={styles.background} />
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableWithoutFeedback onPress={this.onToggle}>
          <Text>
            {moment(this.state.date).format('dddd, D [de] MMM [de] y')}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default ModalDate;
