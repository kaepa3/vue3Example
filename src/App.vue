<script lang="ts">
import { stringifyStyle } from "@vue/shared";
import { compile, warn } from "vue";

export default {
  data() {
    return {
      title: "ok title",
      message: "msg",
      isRed: true,
      textStatus: {
        green: true,
      },
    };
  },
};
</script>

<template>
  <div>
    <h1 :class="textStatus" :title="message">{{ title }}</h1>
  </div>
  <router-link to="/">Home</router-link> ・
  <router-link to="/edit">Edit</router-link>
  <h1>My ToDo App</h1>
  <router-view />
</template>

<style scoped>
body {
  background-color: #eee;
}

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
