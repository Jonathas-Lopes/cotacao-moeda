<template>
  <div id="app">
    <v-app>
      <NavBar class="NavBar" />
      <router-view />
    </v-app>
  </div>
</template>
<script>
// @ is an alias to /src

import Tab from "@/components/Tab.vue";
import chartMethods from '@/methods/chartMethods'

export default {
  components: {
    NavBar: Tab,
  },
  created() {
    chartMethods.updateChart(this)
    
  },
  methods: {
    
    
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.NavBar {
  margin-bottom: 30px;

  a {
    text-decoration: none;
    font-weight: bold;

    &.router-link-exact-active {
      color: black;
    }
  }
}
</style>
