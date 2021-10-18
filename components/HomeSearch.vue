<template>
  <div class="search">
    <input id="serch" type="search" class="rounded-xl" v-on:blur="handleBlur">
    <label for="search"><v-icon color="black" size="30">mdi-magnify</v-icon></label>
  </div>
</template>

<script>
export default {
  methods: {
    handleBlur(e) {
      if (e.target.value.trim().length) {
        e.target.classList.add("blurred");
      } else {
        e.target.classList.remove("blurred");
      }
    }
  }
}
</script>

<style>
</style>