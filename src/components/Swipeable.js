import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native'
import Simple from './Simple'
import Swipeable from 'react-native-gesture-handler/Swipeable'

const Confirmation = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Simple text="Delete?" style={styles.delete} />
    </TouchableOpacity>
  )
}

const DeleteInfo = () => (
  <Simple text="Deleting..." style={{...styles.delete, ...styles.deleting}} />
)

const initialState = {
  list: [
    {id: 1, text: 'Item One'},
    {id: 2, text: 'Item Two'},
    {id: 3, text: 'Item Three'},
    {id: 4, text: 'Item For'},
    {id: 5, text: 'Item Five'},
  ],
}

class SwipeableContainer extends Component {
  state = {
    ...initialState,
  }

  onDelete = (id) =>
    this.setState({list: this.state.list.filter((item) => item.id != id)})

  refresh = () => this.setState({list: initialState.list})

  render() {
    return (
      <View style={styles.container}>
        {this.state.list.map(({id, text}) => (
          <Swipeable
            key={`${id}`}
            renderLeftActions={() => (
              <Confirmation onPress={() => this.onDelete(id)} />
            )}
            renderRightActions={DeleteInfo}
            onSwipeableRightOpen={() => this.onDelete(id)}>
            <Simple text={text} style={styles.text} />
          </Swipeable>
        ))}
        {this.state.list.length !== initialState.list.length && (
          <View style={styles.button}>
            <Button title="Reload list" onPress={this.refresh} />
          </View>
        )}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    width: 'auto',
  },
  delete: {
    backgroundColor: 'rgba(131, 0, 2, 0.9)',
  },
  deleting: {
    textAlign: 'right',
    width: Dimensions.get('window').width,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 50,
  },
})

export default SwipeableContainer
