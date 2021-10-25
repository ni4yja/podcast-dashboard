<template>
  <v-navigation-drawer
    absolute
    permanent
    floating
    right
    width="430"
    style="background-color: #f2f8fd; overflow: visible;"
    class="search-sidebar pa-14"
  >
    <v-card
      flat
      color="rgba(0, 0, 0, 0)"
      class="search-card d-flex flex-column align-center"
      style="margin-top: 90px"
    >
      <v-avatar size="95">
        <img
          :src="require(`~/assets/img/profile.jpeg`)"
          alt="profile-img-small"
        />
      </v-avatar>
      <v-card-title class="text-h5 font-weight-medium"
        >Elsie Barnes</v-card-title
      >
      <v-card-subtitle class="text-body-1 mt-n2"
        >Expert in
        <span class="text-decoration-underline"
          >UI/UX design</span
        ></v-card-subtitle
      >
      <v-card-actions class="px-0">
        <v-btn
          outlined
          rounded
          text
          large
          color="white"
          class="pt-2 pb-2 pl-12 pr-12 mr-9"
          style="
            background-color: #e35376;
            border: none;
            text-transform: capitalize;
            letter-spacing: 0;
          "
          >Follow</v-btn
        >
        <v-btn text style="text-transform: lowercase; letter-spacing: 0">
          2k followers
        </v-btn>
      </v-card-actions>
      <v-card-text class="mt-5" style="line-height: 2"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum
        eligendi ullam quae quia, iste cumque quis ab vero in.</v-card-text
      >
    </v-card>
    <h5 class="text-h5 font-weight-regular mt-7">More podcasts by Elsie</h5>
    <div class="podcast-wrapper mt-8 d-flex" style="width: 480px; position: absolute; left: -50px;">
      <v-card class="rounded-xl mr-4" min-height="200" flat img="podcast-cover-1.jpeg" style="min-width: 270px;">
      </v-card>
      <v-card class="rounded-xl" min-height="200" flat img="podcast-cover-2.jpeg" style="min-width: 270px;">
      </v-card>
    </div>
    <v-toolbar flat dense color="rgba(0,0,0,0)" class="link-holder" style="margin-top: 250px;">
      <v-spacer></v-spacer>
      <a href="#" text class="black--text">See all podcasts</a>
      <v-icon class="black--text" size="20">mdi-chevron-right</v-icon>
    </v-toolbar>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style>
</style>