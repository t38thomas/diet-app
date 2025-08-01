import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Diet } from '../types/diet';
import DietList from '../components/DietList';

interface Props {
  diet: Diet;
  onEdit: () => void;
  onImport: () => void;
}

export default function HomeScreen({ diet, onEdit, onImport }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Diet</Text>
      <DietList diet={diet} />
      <View style={styles.buttons}>
        <Button title="Edit Diet" onPress={onEdit} />
        <Button title="Import" onPress={onImport} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
});
