<template>
  <v-container fluid class="popular-board mt-16 pa-0">
    <v-row no-gutters class="pt-6">
      <h1 class="fon-weight-medium mb-10">Personal board</h1>
    </v-row>
    <v-row no-gutters class="popular-board-row">
      <v-col class="left-col mr-4">
        <v-row no-gutters>
          <v-col>
            <v-card
              flat
              class="rounded-xl"
              width="325"
              height="180"
              img="02.jpeg"
            >
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-4">
          <v-col class="mr-4"
            ><v-card
              flat
              class="rounded-xl"
              width="105"
              height="135"
              img="05.jpeg"
            ></v-card
          ></v-col>
          <v-col
            ><v-card
              flat
              class="rounded-xl"
              width="200"
              height="135"
              img="06.jpeg"
            >
            </v-card
          ></v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row no-gutters>
          <v-col class="mb-4">
            <v-card
              flat
              class="rounded-xl design-card"
              color="#f2f8fd"
              width="120"
              height="120"
            >
              <v-card-subtitle>Category</v-card-subtitle>
              <v-card-title class="text-body-2 font-weight-light pt-0 pr-0 pb-0"
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
        <v-row no-gutters>
          <v-col
            ><v-card
              flat
              class="rounded-xl"
              width="120"
              height="196"
              img="04.jpeg"
            >
            </v-card
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
      gsap.from('.popular-board .v-card', {
        opacity: 0,
        scale: 0,
        stagger: 0.2
      })
    }
  }
}
</script>

<style>
</style>