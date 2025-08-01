import React from 'react';
import { View, Text } from 'react-native';
import { Meal } from '../types/diet';
import MealItem from './MealItem';

interface Props {
  meal: Meal;
}

export default function MealList({ meal }: Props) {
  return (
    <View className="my-2">
      <Text className="text-lg font-bold mb-1 text-black dark:text-white">{meal.title}</Text>
      {meal.items.map(item => (
        <MealItem key={item.id} item={item} />
      ))}
    </View>
  );
}
