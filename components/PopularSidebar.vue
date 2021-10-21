<template>
  <v-navigation-drawer
    absolute
    permanent
    floating
    right
    width="575"
    style="background-color: #fff"
    class="popular-sidebar pa-14"
  >
    <span class="corner-top"></span>
    <span class="corner-bottom"></span>
    <v-container fluid class="player-container pa-0" style="margin-top: 140px">
      <v-row no-gutters>
        <v-col style="position: relative;">
          <Player />
          <span class="history" style="position: absolute; right: 0; top: 10px;"
            ><a href="#" text class="grey--text lighten-3">See all history</a>
            <v-icon>mdi-chevron-right</v-icon></span
          >
        </v-col>
      </v-row>
    </v-container>
    <PopularBoard />
  </v-navigation-drawer>
</template>

<script>
import Player from "~/components/Player.vue";
import PopularBoard from "~/components/PopularBoard.vue"; 

export default {
  components: {
    Player,
    PopularBoard
  },
};
</script>

<style>
</style>