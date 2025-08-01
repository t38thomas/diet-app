import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Meal } from '../types/diet';
import MealItem from './MealItem';

interface Props {
  meal: Meal;
}

export default function MealList({ meal }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{meal.title}</Text>
      {meal.items.map(item => (
        <MealItem key={item.id} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
