export interface MealItem {
  id: string;
  name: string;
  quantity?: string;
}

export interface Meal {
  id: string;
  title: string; // e.g., Breakfast, Lunch
  items: MealItem[];
  // Quick alternative meals for this meal
  alternatives?: MealItem[][];
}

export interface DayPlan {
  id: string;
  date: string; // YYYY-MM-DD
  meals: Meal[];
}

export interface Diet {
  days: DayPlan[];
  quickMeals?: Meal[];
}
