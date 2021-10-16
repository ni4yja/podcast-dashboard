<template>
  <div>
    <HomeHeader />
    <HomeSidebar />
    <v-main style="max-width: 910px" class="pr-13">
      <v-container fluid class="mt-6 pa-0">
        <v-row no-gutters>
          <v-col class="mr-15">
            <HomeSearch />
            <v-row class="mt-3">
              <v-col>
                <v-card class="rounded-xl" flat color="#4d54e1">
                  <v-card-subtitle style="color: #fff">Online?</v-card-subtitle>
                  <v-card-text class="mt-n3" style="color: #fff"
                    >217 <strong>podcasts</strong></v-card-text
                  >
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  class="rounded-xl d-flex justify-center align-center"
                  flat
                  color="#f9d11d"
                  style="height: 100%"
                >
                  <v-card-title>Trends</v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <Player />  
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import HomeHeader from "~/components/HomeHeader.vue";
import HomeSidebar from "~/components/HomeSidebar.vue";
import HomeSearch from "~/components/HomeSearch.vue";
import Player from "~/components/Player.vue";

export default {
  components: {
    HomeHeader,
    HomeSidebar,
    HomeSearch,
    Player
  },
};
</script>

<style>
</style>

