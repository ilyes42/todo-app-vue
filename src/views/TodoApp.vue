<template>
  <main class="container mt-5">
    <form class="row row-cols-lg-auto g-3 align-items-center">
      <div class="col">
        <input class="form-control" v-model="newTodoText" type="text" />
      </div>
      <div class="col">
        <button class="btn btn-primary" @click.prevent="addNewTodo">Add</button>
      </div>
    </form>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo of todos.allTodos">
        <TodoItem :text="todo.text" @delete="deleteOneTodoById(todo.id)" />
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import { useTodosStore } from "@/stores/todos";
import { ref } from "vue";

const todos = useTodosStore();

const newTodoText = ref("");

function addNewTodo() {
  newTodoText.value && todos.addNewTodo(newTodoText.value);
  newTodoText.value = "";
}

function deleteOneTodoById(id: number) {
  todos.deleteOneTodoById(id);
}
</script>
