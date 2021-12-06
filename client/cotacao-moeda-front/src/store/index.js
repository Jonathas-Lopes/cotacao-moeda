import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartName:'Dollar',
    chartValue:{
      options: {
        responsive: true,
      },

      labels: ["segunda", "terça", "quarta", "quinta", "sexta"],
      datasets: [
        {
          label: "Dollar",
          backgroundColor: "#000000",
          data: [6.5, 5.9, 8.0, 8.1, 5.6,100, 200, 300],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
        },
      ],
    },
    currency: [
      {Name:'Dollar', data:[{day:'01/12/2021', value:5.10},{day:'02/12/2021', value:5.50},{day:'03/12/2021', value:5.70},{day:'04/12/2021', value:6.20}]},
      {Name:'Euro', data:[{day:'01/11/2021', value:3.10},{day:'02/11/2021', value:4.50},{day:'03/11/2021', value:7.70},{day:'04/11/2021', value:6.20}]}
    ]

  },
  mutations: {
    SetChartValue(state, currency){
      state.chartValue = currency
    },
    SetCurrency(state, currency){
      state.currency= currency
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
