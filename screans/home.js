import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao ChemistryEduApp</Text>
      <Button
        title="Ver Conceitos Básicos"
        onPress={() => navigation.navigate('Concepts')}
      />
      <Button
        title="FAQ"
        onPress={() => navigation.navigate('FAQ')}
      />
      <Button
        title="Fazer uma Pergunta"
        onPress={() => navigation.navigate('Question')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
