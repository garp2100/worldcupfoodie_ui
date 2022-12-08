export interface Meal {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
}

export interface RootObject {
  meals: Meal[];
}
