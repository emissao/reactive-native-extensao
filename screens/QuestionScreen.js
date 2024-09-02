import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const QuestionScreen = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = () => {
    // Aqui você pode adicionar lógica para enviar a pergunta para um servidor ou e-mail
    Alert.alert('Sua pergunta foi enviada!', 'Obrigado por enviar sua dúvida. Em breve responderemos.');
    setQuestion('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça uma Pergunta</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua pergunta aqui..."
        value={question}
        onChangeText={setQuestion}
        multiline
      />
      <Button title="Enviar Pergunta" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default QuestionScreen;
