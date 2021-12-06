export default{
    updateChart(scope) {
        const target = scope.$store.state.currency.find((data)=>data.Name==scope.$store.state.chartName)
        const params = {
          options: {
            responsive: true,
          },
  
          labels: target.data.map((data)=>data.day),
          datasets: [
            {
              label: target.Name,
              backgroundColor: "#000000",
              data: target.data.map((data)=>data.value),
              fill: false,
              borderColor: "rgb(75, 192, 192)",
            },
          ],
        }
        scope.$store.commit('SetChartValue',params)
        
      },

}