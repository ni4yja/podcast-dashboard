<template>
  <v-app>
    <v-app-bar app flat color="rgba(0,0,0,0)">
      <v-navigation-drawer
        app
        floating
        height="100%"
        width="100%"
        color="rgba(0,0,0,0)"
      >
        <Navigation />
      </v-navigation-drawer>
    </v-app-bar>
    <nuxt />
  </v-app>
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