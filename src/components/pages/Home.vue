<script lang="ts">
import TodoAdd from "@/components/TodoAdd.vue";
import TodoList from "@/components/TodoList.vue";
import { mapStores, mapActions } from "pinia";
import useTodosStore from "@/stores/todos.ts";

export default {
  components: {
    TodoAdd,
    TodoList,
  },
  computed: {
    ...mapStores(useTodosStore),
  },
  methods: {
    ...mapActions(useTodosStore, ["addTodo", "clearDoneTodos"]),
    addNewTodo(newText: string) {
      console.log("call");
      if (!newText) return alert("please input text");
      this.addTodo({
        text: newText,
        isDone: false,
      });
    },
  },
};
</script>
<template>
  <TodoAdd @delete-done="clearDoneTodos" @add-todo="addNewTodo" />
  <p v-if="todosStore.todos.length === 0">Todoがまだありません</p>
  <TodoList v-else :todos="todosStore.todos" />
</template>
