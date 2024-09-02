import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FAQScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Perguntas Frequentes</Text>
      <Text style={styles.question}>1. O que é um átomo?</Text>
      <Text style={styles.answer}>Um átomo é a menor unidade de um elemento químico que mantém as propriedades desse elemento.</Text>
      <Text style={styles.question}>2. Como funciona uma reação química?</Text>
      <Text style={styles.answer}>Uma reação química ocorre quando moléculas ou átomos se rearranjam para formar novas substâncias.</Text>
      {/* Adicione mais perguntas e respostas conforme necessário */}
    </ScrollView>
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
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default FAQScreen;
