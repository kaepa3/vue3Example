<script lang="ts">
type MyObj = {
  text: string;
  isDone: boolean;
};
export default {
  props: {
    todos: Array<MyObj>,
  },
};
</script>

<template>
  <ul>
    <li v-for="todo in todos">
      <input type="checkbox" v-model="todo.isDone" />
      <span :class="{ 'todo-done': todo.isDone }">{{ todo.text }} </span>
    </li>
  </ul>
</template>
