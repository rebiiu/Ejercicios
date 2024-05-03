import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleSum = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivide = () => {
    if (parseFloat(num2) !== 0) {
      setResult(parseFloat(num1) / parseFloat(num2));
    } else {
      setResult('Error: Division by zero');
    }
  };

  //dgghfh
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un número"
        value={num1}
        onChangeText={text => setNum1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresar un número"
        value={num2}
        onChangeText={text => setNum2(text)}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Sumar" onPress={handleSum} />
        <Button title="Restar" onPress={handleSubtract} />
        <Button title="Multiplicar" onPress={handleMultiply} />
        <Button title="Dividir" onPress={handleDivide} />
      </View>
      <Text style={styles.result}>Resultado: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 100
    
  },
  input: {
    width: 200,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 10
  },
  buttonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '200%',
    marginBottom: 50,
    color: '#fff'
    
   
  },
  result: {
    margin: 10,
    fontSize: 25
  },
});

export default Calculator;