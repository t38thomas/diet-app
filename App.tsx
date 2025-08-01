import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Diet } from './src/types/diet';
import { loadDiet, saveDiet } from './src/utils/storage';
import HomeScreen from './src/screens/HomeScreen';
import ImportScreen from './src/screens/ImportScreen';
import EditDietScreen from './src/screens/EditDietScreen';
import { sampleDiet } from './src/utils/sampleDiet';

type ScreenName = 'home' | 'import' | 'edit';

export default function App() {
  const [diet, setDiet] = useState<Diet>({ days: [] });
  const [screen, setScreen] = useState<ScreenName>('home');

  useEffect(() => {
    loadDiet().then(d => {
      if (d.days.length === 0) {
        setDiet(sampleDiet);
      } else {
        setDiet(d);
      }
    });
  }, []);

  const handleSave = async (newDiet: Diet) => {
    setDiet(newDiet);
    await saveDiet(newDiet);
  };

  return (
    <View style={{ flex: 1 }}>
      {screen === 'home' && (
        <HomeScreen diet={diet} onEdit={() => setScreen('edit')} onImport={() => setScreen('import')} />
      )}
      {screen === 'import' && (
        <ImportScreen diet={diet} onImport={d => { handleSave(d); setScreen('home'); }} onBack={() => setScreen('home')} />
      )}
      {screen === 'edit' && (
        <EditDietScreen diet={diet} onSave={handleSave} onBack={() => setScreen('home')} />
      )}
    </View>
  );
}
