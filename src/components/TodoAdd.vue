<script lang="ts">
import MyButton from "./basic/MyButton.vue";

export default {
  components: {
    MyButton,
  },
  emits: ["delete-done", "add-todo"],
  methods: {
    todoAdd() {
      this.$emit("add-todo", this.newTodoText);
      this.newTodoText = "";
    },
  },
  data() {
    return {
      newTodoText: "",
    };
  },
};
</script>

<template>
  <input type="text" v-model="newTodoText" />
  <MyButton @click="todoAdd">追加</MyButton>
  <MyButton @click="$emit('delete-done')">完了済みを削除する</MyButton>
</template>
