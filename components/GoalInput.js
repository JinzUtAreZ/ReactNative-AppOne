import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [output, setOutput] = useState('');

  const textHandler = enteredText => {
    setOutput(enteredText);
  };

  const addPressHandler = () => {
    props.addtextHandler(output);
    setOutput('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          width="80%"
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={textHandler}
          value={output}
        />
        <View style={styles.buttonSpace}>
          <View style={styles.buttonSize}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.buttonSize}>
            <Button title="ADD" onPress={addPressHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 1
  },
  buttonSpace: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  buttonSize: {
    width: '40%'
  }
});

export default GoalInput;
