import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { Button } from '../components/ui/button';
import { Diet, DayPlan, Meal, MealItem } from '../types/diet';
import uuid from 'react-native-uuid';

interface Props {
  diet: Diet;
  onSave: (diet: Diet) => void;
  onBack: () => void;
}

export default function EditDietScreen({ diet, onSave, onBack }: Props) {
  const [plan, setPlan] = useState<DayPlan>({ id: uuid.v4().toString(), date: '', meals: [] });
  const [mealTitle, setMealTitle] = useState('');
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState<MealItem[]>([]);

  const addItem = () => {
    if (!itemName) return;
    setItems([...items, { id: uuid.v4().toString(), name: itemName }]);
    setItemName('');
  };

  const addMeal = () => {
    if (!mealTitle) return;
    const meal: Meal = { id: uuid.v4().toString(), title: mealTitle, items };
    setPlan({ ...plan, meals: [...plan.meals, meal] });
    setMealTitle('');
    setItems([]);
  };

  const savePlan = () => {
    const newDiet: Diet = { ...diet, days: [...diet.days, plan] };
    onSave(newDiet);
    onBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.section}>Add Day</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={plan.date}
        onChangeText={date => setPlan({ ...plan, date })}
      />
      <Text style={styles.section}>Add Meal</Text>
      <TextInput
        style={styles.input}
        placeholder="Meal title"
        value={mealTitle}
        onChangeText={setMealTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Food"
        value={itemName}
        onChangeText={setItemName}
      />
      <Button text="Add Item" onPress={addItem} className="mt-2" />
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <Button text="Add Meal" onPress={addMeal} className="mt-2" />
      <Button text="Save Day" onPress={savePlan} className="mt-2" />
      <Button text="Back" onPress={onBack} className="mt-2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  section: { fontSize: 18, fontWeight: 'bold', marginTop: 16 },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
  },
});
