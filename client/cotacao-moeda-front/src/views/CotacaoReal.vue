<template>
  <v-content>
    <v-container fluid
      >
      <v-row>
        <v-col><Menu /></v-col> 
        <v-col md="10" lg="10"><Chart /></v-col>
      </v-row
    ></v-container>
    
  </v-content>
</template>

<script>
// @ is an alias to /src
import CurrencyChart from "@/components/charts/CurrencyChart";
import SideMenu from '@/components/SideMenu'

export default {
  name: "Home",
  components: {
    Menu:SideMenu,
    Chart: CurrencyChart,
  },
};
</script>
