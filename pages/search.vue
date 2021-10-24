<template>
  <div>
    <PageHeader />
    <SearchSidebar />
    <v-main style="max-width: 860px" class="search-main pr-13">
      <v-container fluid class="mt-2">
        <v-row>
          <v-icon class="black--text" size="24">mdi-chevron-left</v-icon>
          <a href="#" text class="black--text" style="text-decoration: none"
            >Back</a
          >
        </v-row>
        <v-row class="mt-9">
          <v-col style="max-width: 590px" class="article-wrapper pa-0 mr-9">
            <v-card flat class="article-card rounded-0">
              <v-img
                height="345"
                class="rounded-xl"
                :src="require(`~/assets/img/article.jpeg`)"
              ></v-img>
              <v-avatar
                size="70"
                color="rgba(255,255,255,0.2)"
                style="
                  position: absolute;
                  top: 260px;
                  right: 15px;
                  border: 1px solid white;
                "
                ><v-icon size="30" color="white">mdi-play</v-icon></v-avatar
              >
              <v-card-title class="px-0 pt-9 text-h4 font-weight-medium" style="word-break: break-word"
                >About interfaces and prototyping for virtual reality in
                future</v-card-title
              >
              <v-toolbar flat dense class="ml-n4 mr-n4" color="rgba(0,0,0,0)">
                <v-avatar size="30" class="mr-4"
                  ><v-img :src="require(`~/assets/img/profile.jpeg`)"></v-img
                ></v-avatar>
                <v-toolbar-title class="text-body-1">Elsie Barnes</v-toolbar-title>
                <v-spacer></v-spacer>
                <a href="#" text class="grey--text lighten-3 mr-4"
                  >UI/UX design</a
                >
                <a href="#" text class="grey--text lighten-3">Art&Craft</a>
              </v-toolbar>
              <v-card-subtitle class="black--text font-weight-medium px-0">Overview</v-card-subtitle>
              <v-card-text class="px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis qui consequatur sapiente, natus architecto nostrum amet eum molestias debitis modi, quasi animi explicabo quaerat libero voluptates suscipit nisi beatae?</v-card-text>
              <v-card-subtitle class="black--text font-weight-medium px-0">72 comments</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col>
            <div class="d-flex flex-column mt-16">
              <v-icon color="#e35376" class="mb-10">mdi-cards-heart-outline</v-icon>
              <v-icon class="mb-10">mdi-share-outline</v-icon>
              <v-icon class="mb-10">mdi-playlist-plus</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import SearchSidebar from "~/components/SearchSidebar.vue";
import transitions from "~/animation/transitions.js";

export default {
  components: {
    PageHeader,
    SearchSidebar,
  },
  transition() {
    return transitions.slideLeft;
  },
};
</script>

<style>
</style>