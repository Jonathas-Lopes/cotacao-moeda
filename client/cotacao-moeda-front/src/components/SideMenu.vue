<template>
<v-card>
  <v-navigation-drawer permanent style="width:100%; height:87vh" >
    <v-list>
      <v-list-item-group><v-list-item v-for="CurrencyName in CurrencyNames" :key="CurrencyName" link>
        <v-list-item-content>
          <v-list-item-title :id="CurrencyName" @click=updateChartName>{{ CurrencyName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item></v-list-item-group>
    </v-list>
  </v-navigation-drawer></v-card>
  
</template>
<script>
import chartMethods from '@/methods/chartMethods'
export default {
  name: "SideMenu",

  data() {
    return {
      drawer: true,      
      mini: true,
    };
  },
  computed:{
    CurrencyNames(){      
        return this.$store.state.currency.map((data)=>data.Name)      
    }},
    methods:{
      updateChartName(event){
        this.$store.commit('SetChartName',event.target.id)
        chartMethods.updateChart(this)

      }
    }
  
};
</script>
