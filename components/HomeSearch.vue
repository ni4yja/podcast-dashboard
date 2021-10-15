<template>
  <div class="search">
    <input id="serch" type="text" class="rounded-xl" v-on:blur="handleBlur">
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
.search {
  position: relative;
}

.search input {
  border: 2px solid black;
  width: 100%;
  height: 84px;
  padding: 1rem 1rem 1rem 3rem;
  outline: none;
  color: transparent;
}

.search label {
  position: absolute;
  left: calc(50% - 15px);
  bottom: calc(50% - 15px);
  transition: transform ease .3s;
}

.search input:focus {
  color: #000;
  transition: color 0s ease .3s;
}

.search input.blurred {
  color: #000;
}

.search input:focus + label {
  transform: translateX(-120px);
}

.search input.blurred + label {
  transform: translateX(-120px);
}
</style>