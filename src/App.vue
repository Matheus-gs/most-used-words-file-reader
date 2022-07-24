<template>
  <!-- Div #app -->
  <v-app>
    <!-- Header -->
    <v-app-bar app color="primary" dark>
      <h2>Most Used Words</h2>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Body -->
    <v-main>
      <HomeView />
    </v-main>
  </v-app>
</template>

<script>
import HomeView from "./views/HomeView.vue";
export default {
  name: "App",

  components: {
    HomeView,
  },

  data: () => ({
    //
  }),
};
</script>
