import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from '../components/ui/button';
import { Diet } from '../types/diet';
import { sampleDiet } from '../utils/sampleDiet';

interface Props {
  diet: Diet;
  onImport: (diet: Diet) => void;
  onBack: () => void;
}

export default function ImportScreen({ onImport, onBack }: Props) {
  const [jsonText, setJsonText] = useState('');

  const handleImport = () => {
    try {
      const parsed: Diet = JSON.parse(jsonText);
      onImport(parsed);
    } catch (err) {
      Alert.alert('Invalid JSON');
    }
  };

  const handleLoadSample = () => {
    onImport(sampleDiet);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Paste JSON diet:</Text>
      <TextInput
        style={styles.input}
        multiline
        value={jsonText}
        onChangeText={setJsonText}
        placeholder="{...}"
      />
      <View style={styles.buttons}>
        <Button text="Import" onPress={handleImport} />
        <Button text="Load Sample" onPress={handleLoadSample} className="mx-2" />
        <Button text="Back" onPress={onBack} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 18, marginBottom: 8 },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    minHeight: 200,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
