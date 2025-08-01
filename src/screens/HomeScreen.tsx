import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/ui/button';
import { Diet } from '../types/diet';
import DietList from '../components/DietList';

interface Props {
  diet: Diet;
  onEdit: () => void;
  onImport: () => void;
}

export default function HomeScreen({ diet, onEdit, onImport }: Props) {
  return (
    <View className="flex-1 pt-10 bg-white dark:bg-black">
      <Text className="text-2xl font-bold mx-4 mb-4 text-black dark:text-white">My Diet</Text>
      <DietList diet={diet} />
      <View className="flex-row justify-around p-4">
        <Button text="Edit Diet" onPress={onEdit} />
        <Button text="Import" onPress={onImport} className="ml-2" />
      </View>
    </View>
  );
}
