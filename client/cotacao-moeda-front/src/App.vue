<template>
  <div id="app">
    <v-app 
      ><v-container fluid>
        <v-row>
          <v-col md="2"><sideMenu /></v-col>
          <v-col md="10"> <router-view /></v-col>
        </v-row> </v-container
    ></v-app>
  </div>
</template>
<script>
// @ is an alias to /src
import SideMenu from "@/components/SideMenu.vue";

export default {
  components: {
    SideMenu,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
