<template>
  <v-app>
    <v-navigation-drawer
      absolute
      app
      permanent
      floating
      right
      width="380"
      style="background-color: #f2f8fd"
      class="pa-14"
    >
      <div class="text-center mt-16">
        <v-img
          :src="require(`~/assets/liuba.png`)"
          alt="profile-picture"
          width="100"
          class="ml-auto mr-auto"
        ></v-img>
        <h2 class="mt-6 font-weight-medium">Liuba Kuibida</h2>
      </div>
      <v-list class="mt-11 pa-0">
        <v-list-item class="pa-0" v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="item.text"
              class="font-weight-medium mb-2"
            ></v-list-item-title>
            <v-list-item-subtitle
              v-text="item.sub"
              class="grey--text"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo,
  },
  data: () => ({
    items: [
      {
        icon: "mdi-account-supervisor-outline",
        text: "Following podcasters",
        sub: "14 podcasters",
      },
      {
        icon: "mdi-playlist-plus",
        text: "Saved podcasts",
        sub: "14 podcasters",
      },
      {
        icon: "mdi-history",
        text: "History",
      },
    ],
  }),
};
</script>

<style>
</style>

