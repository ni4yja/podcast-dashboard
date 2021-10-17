<template>
  <v-navigation-drawer
    absolute
    permanent
    floating
    right
    width="380"
    style="background-color: #f2f8fd"
    class="home-sidebar pa-14"
  >
    <div class="text-center mt-10">
      <v-img
        :src="require(`~/assets/img/liuba.png`)"
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
    <v-toolbar flat dense color="rgba(0,0,0,0)" class="mt-6">
      <v-toolbar-title class="subheading ml-n4">Balance</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="headline font-weight-light mr-n4 mb-n4">$127</span>
    </v-toolbar>
    <div>
      <a href="#" style="color: #e35376">Add funds</a>
      <v-icon color="#e35376" size="20">mdi-chevron-right</v-icon>
    </div>
    <v-card class="mt-11 rounded-xl" flat color="#e35376">
      <v-card-subtitle style="color: #fff"
        >Anything to tell the audience?</v-card-subtitle
      >
      <v-card-text class="headline mt-3" style="color: #fff"
        >Become <br />
        <strong>a podcaster!</strong></v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <a href="#" style="color: #fff">Learn more</a>
        <v-icon color="#efff" size="20">mdi-chevron-right</v-icon>
      </v-card-actions>
    </v-card>
    <div class="mt-12 d-flex justify-center">
      <v-icon class="mr-13">mdi-cog-outline</v-icon>
      <v-icon>mdi-exit-to-app</v-icon>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
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