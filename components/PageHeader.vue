<template>
  <v-app-bar
    app
    flat
    color="rgba(0,0,0,0)"
    height="130"
    style="right: 56px"
    class="page-header"
  >
    <Navigation />
    <v-spacer></v-spacer>
    <p style="width: 24px"> 
      <v-badge class="mt-4 mr-n4" color="#e35176" dot overlap>
        <v-icon>mdi-bell</v-icon>
      </v-badge>
    </p>
    <h4 class="ml-10">Liuba Kuibida</h4>
    <v-avatar size="45" class="ml-7">
      <img :src="require(`~/assets/img/liuba.png`)" alt="profile-img-small" />
    </v-avatar>
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