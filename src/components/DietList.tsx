import React from 'react';
import { ScrollView } from 'react-native';
import { Diet } from '../types/diet';
import DayPlanView from './DayPlanView';

interface Props {
  diet: Diet;
}

export default function DietList({ diet }: Props) {
  return (
    <ScrollView>
      {diet.days.map(plan => (
        <DayPlanView key={plan.id} plan={plan} />
      ))}
    </ScrollView>
  );
}
