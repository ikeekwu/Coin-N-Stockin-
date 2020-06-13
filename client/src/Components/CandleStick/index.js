import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class CandleStick extends Component {
    constructor(props) {
        super(props);
            console.log(props)
        this.state = {
          series: [{
            data: props.chartData.slice()
          }],
          options: {
            chart: {
                type: 'candlestick'
              },
              title: {
                text: 'CandleStick Chart',
                align: 'left'
              },
              xaxis: {
                type: 'datetime',
                labels:{
                  format: 'dd/MM'
                }
              },
              yaxis: {
                tooltip: {
                  enabled: true
                }
              }
            // chart: {
            //   id: 'realtime',
            //   height: 240,
            //   width: 240,
            //   type: 'line',
            //   animations: {
            //     enabled: true,
            //     easing: 'linear',
            //     dynamicAnimation: {
            //       speed: 1000
            //     }
            //   },
            //   toolbar: {
            //     show: false
            //   },
            //   zoom: {
            //     enabled: false
            //   }
            // },
            // dataLabels: {
            //   enabled: false
            // },
            // stroke: {
            //   curve: 'smooth'
            // },
            // title: {
            //   text: 'Dynamic Updating Chart',
            //   align: 'left'
            // },
            // markers: {
            //   size: 0
            // },
            // xaxis: {
            //   type: 'datetime',
            //   range: 777600000,
            // },
            // yaxis: {
            //   max: 100
            // },
            // legend: {
            //   show: false
            // },
          },
        
        
        };

    }
    
    
    // componentDidUpdate(prevProps){
        
                // function getNewSeries(baseval, yrange) {
                //     var newDate = baseval + TICKINTERVAL;
                //     lastDate = newDate
                  
                //     for(var i = 0; i< data.length - 10; i++) {
                //       // IMPORTANT
                //       // we reset the x and y of the data which is out of drawing area
                //       // to prevent memory leaks
                //       data[i].x = newDate - XAXISRANGE - TICKINTERVAL
                //       data[i].y = 0
                //     }
                  
                //     data.push({
                //       x: newDate,
                //       y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
                //     })
                //   }
        
        
                // const newSeries = [];
        
                // this.state.series.map((s) => {
                // const data = s.data.map(() => {
                //     return Math.floor(Math.random() * (180 - min + 1)) + min
                //     })
                // newSeries.push({ data, name: s.name })
                // })
        
                // this.setState({
                // series: newSeries
                // })

      // };



    
      // componentDidMount() {
        // window.setInterval(() => {
        //   getNewSeries(lastDate, {
        //     min: 10,
        //     max: 90
        //   })
          
        //   ApexCharts.exec('realtime', 'updateSeries', [{
        //     data: data
        //   }])
        // }, 1000)
      // }

    render(){
      return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="candlestick"
        height="240"
        width="240"
      />
      )
    }
}

export default CandleStick;