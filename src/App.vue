<script lang="ts">
import TodoAdd from "./components/TodoAdd.vue";
import { stringifyStyle } from "@vue/shared";
import { compile, warn } from "vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoAdd,
    TodoList,
  },
  data() {
    return {
      title: "ok title",
      message: "msg",
      isRed: true,
      textStatus: {
        green: true,
      },
      todos: [{ isDone: false, text: "hoge" }],
    };
  },
  methods: {
    addTodo(newText: string) {
      if (!newText) return alert("please input text");
      this.todos.push({
        text: newText,
        isDone: false,
      });
    },
    clearDoneTodos() {
      this.todos = this.todos.filter((x) => !x.isDone);
    },
  },
};
</script>

<template>
  <div>
    <h1 :class="textStatus" :title="message">{{ title }}</h1>
  </div>
  <h1>My ToDo App</h1>
  <TodoAdd @delete-done="clearDoneTodos" @add-todo="addTodo" />
  <p v-if="todos.length === 0">Todoがまだありません</p>
  <TodoList v-else :todos="todos" />
</template>

<style scoped>
.green {
  color: green;
}

.done {
  text-decoration: line-through;
}

.red {
  color: red;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
