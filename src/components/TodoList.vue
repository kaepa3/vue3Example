<script lang="ts">
import MyButton from "@/components/basic/MyButton.vue";
import { MyObj } from "@/stores/todos.ts";
export default {
  components: {
    MyButton,
  },
  props: {
    todos: Array<MyObj>,
  },
  methods: {
    openEditMode(todo: MyObj) {
      this.$router.push("/edit");
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="todo in todos">
      <input type="checkbox" v-model="todo.isDone" />
      <span :class="{ 'todo-done': todo.isDone }">{{ todo.text }} </span>
      <MyButton @click="openEditMode(todo)">編集</MyButton>
    </li>
  </ul>
</template>
