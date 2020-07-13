<template>
  <div>
    <div class="ui secondary pointing menu">
      <router-link to="/" class="item active">Image Storage</router-link>
      <div class="right menu">
        <a v-if="!isLoggedIn" href="#" class="ui item" @click="login">Login</a>
        <div class="horizontal" v-else>
          <router-link to="/galleries" class="item">Galleries</router-link>
          <router-link to="/upload" class="item">Upload</router-link>
          <a href="#" class="ui item" @click="logout">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["login", "logout"])
  }
};
</script>

<style>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
