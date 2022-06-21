<template>
  <main class="container mt-5">
    <form class="row row-cols-lg-auto g-3 align-items-center mb-5">
      <div class="col">
        <input class="form-control" v-model="newTodoText" type="text" />
      </div>
      <div class="col">
        <button class="btn btn-primary" @click.prevent="addNewTodo">
          Add a new todo item
        </button>
      </div>
    </form>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo of todos" :key="todo.id">
        <TodoItem
          :text="todo.text"
          :done="todo.done"
          @delete="deleteOneTodoById(todo.id)"
          @toggleDone="(done) => toggleDone(done, todo.id)"
        />
      </li>
    </ul>
    <div class="mt-5">
      <button class="btn btn-secondary" @click="toggleHideDone">
        {{ hideDone ? "Show done" : "Hide done" }}
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import { useTodosStore } from "@/stores/todos";
import { ref } from "vue";

const todosStore = useTodosStore();
const todos = ref(todosStore.allTodos);

const newTodoText = ref("");
const hideDone = ref(false);

function addNewTodo() {
  newTodoText.value && todosStore.addNewTodo(newTodoText.value);
  newTodoText.value = "";
}

function deleteOneTodoById(id: number) {
  todosStore.deleteOneTodoById(id);
}

function toggleDone(done: boolean, id: number) {
  todosStore.setDone(done, id);
}

function toggleHideDone() {
  hideDone.value = !hideDone.value;
  if (hideDone.value) {
    todos.value = todosStore.allNotDoneTodos;
  } else {
    todos.value = todosStore.allTodos;
  }
}
</script>
