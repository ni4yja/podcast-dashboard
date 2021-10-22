<template>
  <nav class="navigation ml-n4">
    <v-list>
      <v-item-group>
        <v-item link class="menu-link mr-12"
          ><NuxtLink to="/">Home<span class="line"></span></NuxtLink></v-item
        >
        <v-item link class="menu-link mr-12"
          ><NuxtLink to="/popular">Popular<span class="line"></span></NuxtLink></v-item
        >
        <v-item link class="menu-link mr-12"
          ><NuxtLink to="/search">Search<span class="line"></span></NuxtLink></v-item
        >
      </v-item-group>
    </v-list>
  </nav>
</template>

<script>
export default {
};
</script>

<style>
</style>