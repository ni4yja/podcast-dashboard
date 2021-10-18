<template>
  <div>
    <PageHeader />
    <SearchSidebar />
    <v-main><h2>Search</h2></v-main>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import SearchSidebar from "~/components/SearchSidebar.vue";

export default {
  components: {
    PageHeader,
    SearchSidebar
  }
}
</script>

<style>

</style>