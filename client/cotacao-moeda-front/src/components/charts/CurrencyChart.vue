<template>
  <div style="width:100%; ">
    <line-chart :chart-data="Currency" :options="options"></line-chart>
    
  </div>
</template>

<script>
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
  mounted() {
   
  },
  methods: {
    
  },
  computed:{
    Currency(){      
        return this.$store.state.chartValue      
    }
  }
};
</script>

<style>

</style>