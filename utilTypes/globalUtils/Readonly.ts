namespace Readonly {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
    address: {
      name: string;
      detail: {
        name: string;
      };
    };
  }
  type test1 = Readonly<Todo>;
  type test2 = SelectedReadonly<Todo, "title">;
  type test3 = DeepReadonly<Todo>;
}
