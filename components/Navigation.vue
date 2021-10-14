<template>
  <nav class="ml-n4">
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
.v-application .menu-link {
  color: #000;
  text-decoration: none;
  position: relative;
}

.menu-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 20px;
  height: 3px;
  background: #e35176;
  display: none;
}

.menu-link.nuxt-link-exact-active::after {
  display: block;
}
</style>