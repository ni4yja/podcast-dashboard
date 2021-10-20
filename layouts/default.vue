<template>
  <v-app :class="currentPage">
    <v-navigation-drawer app permanent light floating width="130" class="global-sidebar pa-13">
      <v-icon>mdi-view-dashboard</v-icon>
      <div style="position: absolute; bottom: 52px" class="d-flex flex-column">
        <v-icon class="mb-n4">mdi-chevron-up</v-icon>
        <v-icon class="mb-n4">mdi-chevron-up</v-icon>
        <v-icon class="mb-n1">mdi-chevron-up</v-icon>
        <v-icon size="16">mdi-circle-outline</v-icon>
        <v-icon class="mt-n1">mdi-chevron-down</v-icon>
        <v-icon class="mt-n4">mdi-chevron-down</v-icon>
        <v-icon class="mt-n4">mdi-chevron-down</v-icon>
      </div>
    </v-navigation-drawer>
    <nuxt />
  </v-app>
</template>
<script>
export default {
  computed: {
    currentPage() {
      return this.$route.name;
    },
  },
}
</script>

<style>
</style>

