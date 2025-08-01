import React from 'react';
import { View, Text } from 'react-native';
import { DayPlan } from '../types/diet';
import MealList from './MealList';

interface Props {
  plan: DayPlan;
}

export default function DayPlanView({ plan }: Props) {
  return (
    <View className="p-4 border-b border-gray-300 dark:border-gray-600">
      <Text className="text-xl font-bold mb-2 text-black dark:text-white">{plan.date}</Text>
      {plan.meals.map(meal => (
        <MealList key={meal.id} meal={meal} />
      ))}
    </View>
  );
}
