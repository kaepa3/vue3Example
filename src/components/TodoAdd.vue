<script lang="ts">
import MyButton from "@/components/basic/MyButton.vue";

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
  <MyButton @click="todoAdd"
    ><img src="@/assets/icon-plus.svg" height="10"
  /></MyButton>
  <MyButton @click="$emit('delete-done')">完了済みを削除する</MyButton>
</template>
