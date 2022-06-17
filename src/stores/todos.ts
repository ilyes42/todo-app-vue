import { defineStore } from "pinia";
import type { Todo } from "@/interfaces/Todo";

const INITIAL_TODOS: Array<Todo> = [
  { id: 1, text: "A" },
  { id: 2, text: "B" },
  { id: 3, text: "C" },
];

export const useTodosStore = defineStore("todos", {
  state: () => {
    return {
      todos: INITIAL_TODOS,
      nextId: 4,
    };
  },
  actions: {
    addNewTodo(text: string) {
      this.todos.push({ id: this.nextId++, text });
    },
    deleteOneTodoById(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  getters: {
    allTodos: (state) => {
      return state.todos;
    },
  },
});
