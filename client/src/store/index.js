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
      console.log(state.sideMenuItens, 's')
    },  
    
    SetCurrency(state, currency){
      state.currencies= currency
      console.log(state.currencies[0].currencyName, 'teste')
      
    },
    updateCurrency(state, ){
      let arrayforexchange = Array.from(state.currencies)
      
      console.log(arrayforexchange, 'teste2')
      
    },
    SetChartName(state, chartName){
      state.chartName= chartName
      console.log(state.chartName)
    }
  },
  actions: {
   
  },
  modules: {
  }
})
