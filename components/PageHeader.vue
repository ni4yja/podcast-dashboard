<template>
  <v-app-bar
    app
    color="rgba(0,0,0,0)"
    height="130"
  >
    <Navigation />
    <v-spacer></v-spacer>
    <v-badge class="mr-n4" color="#e35176" dot overlap>
      <v-icon>mdi-bell</v-icon>
    </v-badge>
  </v-app-bar>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>

<style>
</style>