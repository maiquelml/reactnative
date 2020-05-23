/**
 * ScrollView will load items (data in it for scrolling) immediately after component loading.
 * So all data will mount into RAM and you can't use hundred or thousand items in it (because of low performance).
 * But FlatList has a better solution for this issue, it will mount 10 items (by default) to screen, if user scroll view so other items will mount.
 * It's a big gain of FlatList instead of ScrollView.
 * You can use ScrollView in small items (like 100 items) and FlatList fro even 10000 items.
 *
 *
 * https://reactnative.dev/docs/scrollview
 */

import React from 'react'
import {SafeAreaView, FlatList, View, Text} from 'react-native'
import Simple from './Simple'

const LIMIT = 25

const items = []

for (let i = 1; i <= LIMIT; i++) {
  items.push({text: 'Item ' + i})
}

const List = () => {
  const renderItem = ({item}) => (
    <View>
      <Simple {...item} />
    </View>
  )

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

export default List
