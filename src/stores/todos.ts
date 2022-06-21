import { defineStore } from "pinia";
import type { Todo } from "@/interfaces/Todo";

const INITIAL_TODOS: Array<Todo> = [
  { id: 1, text: "A", done: false },
  { id: 2, text: "B", done: false },
  { id: 3, text: "C", done: false },
];

export const useTodosStore = defineStore("todos", {
  state: () => {
    return {
      todos: INITIAL_TODOS,
      nextId: 4,
    };
  },
  actions: {
    /**
     * Adds a new todo item to the store.
     * @param {string} text - Todo's text.
     */
    addNewTodo(text: string) {
      this.todos.push({ id: this.nextId++, done: false, text });
    },
    /**
     * Deletes a todo item from the store.
     * @param {number} id - Todo's id.
     */
    deleteOneTodoById(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    /**
     * Marks one todo as done, provided its id.
     * @param id - Todo's id.
     */
    markOneTodoAsDone(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.done = true;
      }
    },
  },
  getters: {
    allTodos: (state) => {
      return state.todos;
    },
    allDoneTodos: (state) => {
      return state.todos.filter((todo) => todo.done === true);
    },
    allNotDoneTodos: (state) => {
      return state.todos.filter((todo) => todo.done === false);
    },
  },
});
