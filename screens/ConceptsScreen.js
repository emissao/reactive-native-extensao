import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ConceptsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Conceitos Básicos de Química</Text>
      <Text style={styles.concept}>1. Átomos: Os blocos de construção da matéria.</Text>
      <Text style={styles.concept}>2. Moléculas: Grupos de átomos unidos por ligações químicas.</Text>
      <Text style={styles.concept}>3. Reações Químicas: Processos onde substâncias se transformam em novas substâncias.</Text>
      {/* Adicione mais conceitos conforme necessário */}
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
  concept: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ConceptsScreen;
