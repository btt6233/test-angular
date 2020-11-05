interface Player {
  firstName: string;
  lastName?: string;
  num?: number;
  injured?: boolean;
}


interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export { Player, Todo };
