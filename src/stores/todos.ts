import { defineStore } from "pinia";

type MyObj = {
  text: string;
  isDone: boolean;
};

const useTodosStore = defineStore("todos", {
  state: () => {
    return {
      todos: [
        {
          isDone: false,
          text: "Todo in Pinia Store!",
        },
      ],
    };
  },
  actions: {
    addTodo(todo: MyObj) {
      this.todos.push(todo);
    },
    clearDoneTodos() {
      this.todos = this.todos.filter((x) => !x.isDone);
    },
  },
});
export default useTodosStore;
