interface TodoItem {
  todoTitle: string;
  done: boolean;
  index: number;
}
interface Card {
  cardID: string;
  cardName: string;
  TodosData: TodoItem[];
}
interface Tail {
  id: string;
  tailName: string;
  theme: Theme;
  cardsData: Card[];
}
interface Theme {
  bgColor: string;
  tailOptionColor: string;
  cardHeader: string;
}
