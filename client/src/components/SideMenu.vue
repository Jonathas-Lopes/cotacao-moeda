<template>
<v-card>
  <v-navigation-drawer permanent style="width:100%; height:87vh" >
    <v-list>
      <v-list-item-group><v-list-item v-for="(sideMenuItem) in this.$store.state.sideMenuItens" :key="sideMenuItem" link>
        <v-list-item-content>
          <v-list-item-title :id="sideMenuItem" @click=updateChartName>{{ sideMenuItem }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item></v-list-item-group>
    </v-list>
  </v-navigation-drawer></v-card>
  
</template>
<script>

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
        return this.$store.state.currencies.map((data)=>data.currencyName)      
    }},
    methods:{
      updateChartName(event){
        this.$store.commit('SetChartName',event.target.id)
        

      }
      
    }
  
};
</script>
