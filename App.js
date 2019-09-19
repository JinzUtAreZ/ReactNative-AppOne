import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalList';
import GoalInput from './components/GoalInput';

export default function App() {
  const [listOutput, setlistOutput] = useState([]);
  const [isVisible, setVisible] = useState(false);

  const addtextHandler = newdata => {
    var dataid = Math.random().toString();
    console.log(dataid, newdata);
    setlistOutput(currentOutput => [
      ...currentOutput,
      { id: dataid, value: newdata }
    ]);
    setVisible(false);
  };

  const deleteHandler = id => {
    console.log(id);
    setlistOutput(currentOutput => {
      return currentOutput.filter(textData => textData.id !== id);
    });
  };

  const cancleHandler = () => {
    setVisible(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setVisible(true)} />
      <GoalInput
        visible={isVisible}
        addGoal={addtextHandler}
        onCancel={cancleHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listOutput}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={deleteHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});

/* Flexbox exercise
  <View
      style={{
        padding: 50,
        flexDirection: 'row',
        width: '100%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'stretch'
      }}
    >
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>

      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View> */
