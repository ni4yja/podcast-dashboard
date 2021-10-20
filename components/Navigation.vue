<template>
  <nav class="navigation ml-n4">
    <v-list>
      <v-item-group>
        <v-item link class="menu-link mr-12"
          ><NuxtLink to="/">Home</NuxtLink></v-item
        >
        <v-item link class="menu-link mr-12"
          ><NuxtLink to="/popular">Popular</NuxtLink></v-item
        >
        <v-item link class="menu-link mr-12"
          ><NuxtLink to="/search">Search</NuxtLink></v-item
        >
      </v-item-group>
    </v-list>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>