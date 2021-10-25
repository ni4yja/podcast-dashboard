<template>
  <div>
    <PageHeader />
    <PopularSidebar />
    <v-main class="popular-main">
      <v-container fluid class="popular-bar pa-13" style="width: 800px">
        <v-row no-gutters>
          <v-col>
            <h1 class="font-weight-medium white--text">Popular</h1>
          </v-col>
          <v-col>
            <v-list flat color="rgba(0, 0, 0, 0)" class="popular-nav pa-0">
              <v-list-item-group v-model="selectedItem">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  class="d-inline-flex pa-0 mt-1 ml-8"
                >
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
        <v-row class="mt-7">
          <v-col
            ><v-card
              flat
              height="160"
              class="rounded-xl"
              img="podcast-card-1.jpeg"
            ></v-card
          ></v-col>
          <v-col
            ><v-card
              flat
              height="160"
              class="rounded-xl"
              img="podcast-card-2.jpeg"
            ></v-card
          ></v-col>
          <v-col
            ><v-card
              flat
              height="160"
              class="rounded-xl"
              img="podcast-card-3.jpeg"
            ></v-card
          ></v-col>
        </v-row>
        <v-row>
          <v-toolbar flat dense color="rgba(0,0,0,0)">
            <a href="#" text class="white--text" style="opacity: 0.6"
              >Filters</a
            >
            <v-spacer></v-spacer>
            <a href="#" text class="yellow--text">See more</a>
            <v-icon class="yellow--text" size="20">mdi-chevron-right</v-icon>
          </v-toolbar>
        </v-row>
      </v-container>
      <v-container
        fluid
        class="search-bar pa-0 mx-0 mt-16"
        style="width: 530px"
      >
        <v-row>
          <v-toolbar flat dense color="rgba(0,0,0,0)">
            <div class="popular-search">
              <input placeholder="Search" type="search" />
            </div>
            <v-spacer></v-spacer>
            <span
              ><a
                href="#"
                text
                class="white--text"
                style="text-decoration: none; opacity: 0.6"
                >See history</a
              >
              <v-icon class="white--text" size="20" style="opacity: 0.6"
                >mdi-chevron-right</v-icon
              ></span
            >
          </v-toolbar>
        </v-row>
        <SearchCards />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import PopularSidebar from "~/components/PopularSidebar.vue";
import SearchCards from "~/components/SearchCards.vue";
import transitions from "~/animation/transitions.js";

export default {
  components: {
    PageHeader,
    PopularSidebar,
    SearchCards,
  },
  transition(to, from) {
    if (from.name === "index" && to.name === "popular") {
      return transitions.slideLeft;
    } else {
      return transitions.slideRight;
    }
  },
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "All" },
      { text: "Lifestyle" },
      { text: "Sport" },
      { text: "Art&Craft" },
    ],
  }),
  methods: {},
};
</script>

<style>
</style>