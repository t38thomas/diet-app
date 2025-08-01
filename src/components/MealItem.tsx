import React from 'react';
import { View, Text } from 'react-native';
import { MealItem as MealItemType } from '../types/diet';

interface Props {
  item: MealItemType;
}

export default function MealItem({ item }: Props) {
  return (
    <View className="py-1">
      <Text className="text-base text-black dark:text-white">{item.name} {item.quantity ? `- ${item.quantity}` : ''}</Text>
    </View>
  );
}
