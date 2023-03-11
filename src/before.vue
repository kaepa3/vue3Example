<script lang="ts">
import { stringifyStyle } from "@vue/shared";
import { warn } from "vue";

export default {
  data() {
    return {
      title: "ok title",
      message: "msg",
      isRed: true,
      textStatus: {
        green: true,
      },
      input: {
        name: "hase",
        last: "ken",
        isMember: false,
      },
      users: [
        {
          name: "yama",
          last: "taka",
          isMember: true,
        },
        {
          name: "hase",
          last: "ken",
          isMember: false,
        },
        {
          name: "hase",
          last: "ken",
          isMember: false,
        },
      ],
    };
  },
  methods: {
    addUser() {
      this.users.push(this.input);
      this.input = {
        name: "",
        last: "",
        isMember: true,
      };
    },
  },
};
</script>

<template>
  <div>
    <h1 :class="{ red: isRed }" :title="message">{{ title }}</h1>
    <h1 :class="textStatus" :title="message">{{ title }}</h1>
    <input type="text" v-model="input.name" />
    <input type="text" v-model="input.last" />
    <input type="checkbox" v-model="input.isMember" />
    <button v-on:click="addUser">ユーザー追加</button>
    <div v-for="user in users">
      <p>Name:{{ user.name }} {{ user.last }}</p>
      <p v-if="user.isMember">member</p>
      <p v-else>not member</p>
    </div>
  </div>
  <h1>My ToDo App</h1>
  <input type="text" /><button>追加</button><button>完了済みを削除する</button>
  <ul>
    <li>
      <input type="checkbox" checked /><span class="todo-done">Vueをマスターする</span>
    </li>
    <li><input type="checkbox" /><span>牛乳を買う</span></li>
    <li><input type="checkbox" /><span>家賃を払う</span></li>
  </ul>
</template>

<style scoped>
.green {
  color: green;
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
