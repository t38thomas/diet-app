import AsyncStorage from '@react-native-async-storage/async-storage';
import { Diet } from '../types/diet';

const KEY = 'DIET_DATA';

export async function saveDiet(diet: Diet): Promise<void> {
  try {
    const json = JSON.stringify(diet);
    await AsyncStorage.setItem(KEY, json);
  } catch (err) {
    console.error('Error saving diet', err);
  }
}

export async function loadDiet(): Promise<Diet> {
  try {
    const json = await AsyncStorage.getItem(KEY);
    if (json) {
      return JSON.parse(json);
    }
  } catch (err) {
    console.error('Error loading diet', err);
  }
  return { days: [] };
}
