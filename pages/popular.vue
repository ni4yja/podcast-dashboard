<template>
  <div>
    <PageHeader />
    <PopularSidebar />
    <v-main class="popular-main"><h2>Popular</h2></v-main>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import PopularSidebar from "~/components/PopularSidebar.vue";

export default {
  components: {
    PageHeader,
    PopularSidebar
  },
};
</script>

<style>
</style>