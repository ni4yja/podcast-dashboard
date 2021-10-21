<template>
  <v-container fluid class="home-board mt-16 pa-0">
    <v-row no-gutters class="pt-6">
      <h1 class="fon-weight-medium mb-10">Personal board</h1>
    </v-row>
    <v-row no-gutters class="home-board-row">
      <v-col class="left-col mr-4">
        <v-row no-gutters>
          <v-col>
            <v-card
              flat
              class="rounded-xl d-flex align-end"
              width="350"
              height="200"
              img="02.jpeg"
            >
              <v-card-title class="font-weight-light white--text"
                >How to&nbsp;<strong class="font-weight-medium"
                  >meditate</strong
                ></v-card-title
              >
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-4">
          <v-col class="mr-4"
            ><v-card
              flat
              class="rounded-xl d-flex align-end"
              width="165"
              height="150"
              img="05.jpeg"
            >
              <v-card-title class="font-weight-medium"
                >Inspiration</v-card-title
              ></v-card
            ></v-col
          >
          <v-col
            ><v-card
              flat
              class="rounded-xl"
              width="165"
              height="150"
              img="06.jpeg"
            >
              <v-card-title class="font-weight-medium white--text"
                >Fashion</v-card-title
              ></v-card
            ></v-col
          >
        </v-row>
      </v-col>
      <v-col>
        <v-row no-gutters>
          <v-col class="mr-4">
            <v-row no-gutters class="mb-4">
              <v-col class="mr-4"
                ><v-card
                  flat
                  class="rounded-xl"
                  width="90"
                  height="70"
                  img="03.jpg"
                ></v-card
              ></v-col>
              <v-col
                ><v-card
                  flat
                  class="rounded-xl"
                  width="70"
                  height="70"
                  img="01.jpeg"
                ></v-card
              ></v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <v-card
                  flat
                  class="rounded-xl design-card"
                  color="#f2f8fd"
                  width="180"
                  height="145"
                >
                  <v-card-subtitle>Category</v-card-subtitle>
                  <v-card-title class="font-weight-light pt-0 pb-3"
                    >UI/UX &nbsp;<strong class="font-weight-medium"
                      >design</strong
                    ></v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-icon size="30">mdi-chevron-right</v-icon>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-card
              flat
              class="rounded-xl d-flex align-end"
              width="160"
              height="230"
              img="04.jpeg"
            >
              <v-card-title class="font-weight-light"
                >History of
                <strong class="font-weight-medium"
                  >Architecture</strong
                ></v-card-title
              >
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-4">
          <v-col class="mr-4"
            ><v-card
              flat
              class="rounded-xl d-flex align-end"
              width="215"
              height="120"
              img="07.jpeg"
            >
              <v-card-title class="font-weight-medium white--text"
                >Orange Pie</v-card-title
              >
            </v-card></v-col
          >
          <v-col
            ><v-card
              flat
              class="rounded-xl"
              width="120"
              height="120"
              img="08.jpeg"
            ></v-card
          ></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.staggering()
  },
  methods: {
    staggering() {
      const gsap = this.$gsap
      gsap.from('.home-board .v-card', {
        opacity: 0,
        scale: 0,
        stagger: 0.1
      })
    }
  }
}
</script>

<style>
</style>