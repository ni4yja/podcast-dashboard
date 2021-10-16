<template>
  <div style="width: 370px">
    <h2 class="font-weight-regular mt-1 mb-6">Where we finished</h2>
    <v-card flat color="#f2f8fd" class="rounded-xl pt-2 pb-3">
      <v-list-item three-line class="pl-6 pr-6">
        <v-list-item-avatar tile size="70" class="rounded-xl">
          <v-img
            :src="require(`~/assets/01.jpeg`)"
            alt="podcast-picture"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="body-1 font-weight-medium">
            Podcast name
          </v-list-item-title>
          <v-list-item-subtitle>Luella Garner</v-list-item-subtitle>
          <v-list-item-subtitle class="body-1 font-weight-medium black--text"
            >13:47</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-avatar style="border: 2px solid #e7eaf2" size="70">
          <v-icon color="#e35376" size="30">mdi-play</v-icon>
        </v-list-item-avatar>
      </v-list-item>
      <v-progress-linear value="40" class="progress-line"></v-progress-linear>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.progress-line {
  position: absolute;
  bottom: 0;
  left: 12px;
  width: calc(100% - 24px);
}

.progress-line .v-progress-linear__background {
  background: #e7eaf2 !important;
  opacity: 1 !important;
}

.progress-line .v-progress-linear__determinate {
  background: #e35376 !important;
}
</style>