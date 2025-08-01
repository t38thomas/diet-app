import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MealItem as MealItemType } from '../types/diet';

interface Props {
  item: MealItemType;
}

export default function MealItem({ item }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name} {item.quantity ? `- ${item.quantity}` : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
  },
  text: {
    fontSize: 16,
  },
});
