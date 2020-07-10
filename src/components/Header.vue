<template>
  <div>
    <div class="ui secondary pointing menu">
      <a href="/" class="item active">Image Storage</a>
      <div class="right menu">
        <a href="#" class="ui item" @click="login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Header",
  methods: {
    ...mapActions(['login'])
  }
};
</script>

<style></style>
