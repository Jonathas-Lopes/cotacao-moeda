export default function createWebSocketPlugin (socket) {
  return store => {
    socket.on('currencies', data => {
      store.commit('SetSideMenuItens', data.map(item=>item.currencyName));
      store.commit('SetCurrency', data.map(element=>({currencyName:element.currencyName, chartData:{
        options: {
          responsive: true,
        },

        labels: element.date,
        datasets: [
          {
            label: `${element.currencyName} high`,
            backgroundColor: "#000000",
            data: element.high,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
          },
          {
            label: `${element.currencyName} low`,
            backgroundColor: "#000000",
            data: element.low,
            fill: false,
            borderColor: "rgb(75, 192, 0)",
          }
        ],
      }})))
    })
    socket.on('currenciesUpdated', data=>{
      store.commit('updateCurrency', data)

    })
    
  }
}