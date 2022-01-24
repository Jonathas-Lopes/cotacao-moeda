<template>
  <div style="width:100%;" >
    <div v-for="(currency, index) in this.$store.state.currencies" :key="index">
      <line-chart v-if="currency.currencyName == ChartName" :chart-data="currency.chartData" :options="options"></line-chart>
      </div>
    
    
  </div>
</template>

<script>
// import chartMethods from '../../methods/chartMethods'
import LineChart from "./templates/LineChart";



export default {
  components: {
    LineChart,
  },
  data() {
    return {
          
      options: { responsive: true, maintainAspectRatio: false },
    
    };
  },
  updated() {
   
   
   
   
  },
  mounted() {
    // this.$socket.on('currencies', (response)=>{
    //   console.log(response)
    // })
    
    },
  
  methods: {
    
  },
  computed:{
    ChartName(){      
        return this.$store.state.chartName 
    }
  }
};
</script>

<style>

</style>