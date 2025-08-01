import { Diet } from '../types/diet';

export const sampleDiet: Diet = {
  days: [
    {
      id: '1',
      date: '2023-09-15',
      meals: [
        {
          id: 'm1',
          title: 'Breakfast',
          items: [
            { id: 'i1', name: 'Oatmeal', quantity: '50g' },
            { id: 'i2', name: 'Banana', quantity: '1' }
          ]
        },
        {
          id: 'm2',
          title: 'Lunch',
          items: [
            { id: 'i3', name: 'Chicken Breast', quantity: '200g' },
            { id: 'i4', name: 'Salad', quantity: '150g' }
          ]
        }
      ]
    }
  ]
};
