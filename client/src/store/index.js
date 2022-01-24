import Vue from 'vue'
import Vuex from 'vuex'
import socket from '../plugins/socket'
import  createWebSocketPlugin from './storePlugins/socketStorePlugin'

Vue.use(Vuex)
const plugin = createWebSocketPlugin(socket)

export default new Vuex.Store({
  plugins:[plugin],
  state: {  
    sideMenuItens:['USDBRL'],
    chartName:'USDBRL',  
    
    currencies: [{"currencyName":"USDBRL", chartData:{}},{"currencyName":"EURBRL",chartData:{}},{"currencyName":"BTCBRL", chartData:{}}]

  },
  mutations: {  
    SetSideMenuItens(state, itens){
      state.sideMenuItens= itens
      
    },  
    
    SetCurrency(state, data){
      state.currencies= data
      
      
    },
    updateCurrency(state, data ){
      
      let arrayforexchange = data.map( (element,index ) => ({currencyName:element.currencyName, chartData:{
        options: {
          responsive: true,
        },

        labels: [...state.currencies[index].chartData.labels, ...element.date ],
        datasets: [
          {
            label: `${element.currencyName} high`,
            backgroundColor: "#000000",
            data: [...state.currencies[index].chartData.datasets[0].data, ...element.high],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
          },
          {
            label: `${element.currencyName} low`,
            backgroundColor: "#000000",
            data: [...state.currencies[index].chartData.datasets[1].data, ...element.low],
            fill: false,
            borderColor: "rgb(75, 192, 0)",
          }
        ],
      }}) )

      state.currencies = arrayforexchange;      
    },
    SetChartName(state, chartName){
      state.chartName= chartName
      
    }
  },
  actions: {
   
  },
  modules: {
  }
})
