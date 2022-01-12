namespace Partial {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  let todo: Todo = {
    title: "eddie",
    description: "hello",
    completed: false,
  };

  const updateTodo = (todo: Todo, updated: Partial<Todo>): Todo => ({
    ...todo,
    ...updated,
  });

  todo = updateTodo(todo, { completed: true });

  console.log(todo); // { title: 'eddie', description: 'hello', completed: true }
}
