import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DayPlan } from '../types/diet';
import MealList from './MealList';

interface Props {
  plan: DayPlan;
}

export default function DayPlanView({ plan }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{plan.date}</Text>
      {plan.meals.map(meal => (
        <MealList key={meal.id} meal={meal} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
