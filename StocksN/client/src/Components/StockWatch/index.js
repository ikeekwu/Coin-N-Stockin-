import React, { useState, useEffect, useRef } from 'react';
import Title from '../TitleComponent/index.js';
import CandleStick from '../CandleStick';
import useScript from './useScript';
import moment from 'moment';

function StockWatch(props){

console.log(props)

// const [loaded, error] = useScript(
//     './Chart-chart-financial.js'
//   );

//   useEffect(() => {
// 	if (!loaded) return
// }, [loaded, error])

// [] = useState({

// })
// var dataDate = Chart.()






// const chartConfig = {
// 	options: {
// 		chart: {
// 			type: 'candlestick',
// 			height: 240
// 		  },
// 		  title: {
// 			text: 'CandleStick Chart',
// 			align: 'left'
// 		  },
// 		  xaxis: {
// 			type: 'datetime'
// 		  },
// 		  yaxis: {
// 			tooltip: {
// 			  enabled: true
// 			}
// 		  }
		
// 	},
// 	series: [{
// 		data: data.slice()
// 	}],
	// type: 'candlestick',
	// data: {
	// 	datasets: [{
	// 		label: 'CHRT - Chart.js Corporation',
	// 		data: getData(initialDateStr, barCount)
	// 	}]
	// },
	
	// options: {
	// 	scales: {
	// 		x: {
	// 			afterBuildTicks: function(scale) {
	// 				const majorUnit = scale._majorUnit;
	// 				const ticks = scale.ticks;
	// 				const firstTick = ticks[0];
	// 				let i, ilen, val, tick, currMajor, lastMajor;

	// 				val = moment(ticks[0].value);
	// 				if ((majorUnit === 'minute' && val.second === 0)
	// 						|| (majorUnit === 'hour' && val.minute === 0)
	// 						|| (majorUnit === 'day' && val.hour === 9)
	// 						|| (majorUnit === 'month' && val.day <= 3 && val.weekday === 1)
	// 						|| (majorUnit === 'year' && val.month === 0)) {
	// 					firstTick.major = true;
	// 				} else {
	// 					firstTick.major = false;
	// 				}
	// 				lastMajor = val.get(majorUnit);

	// 				for (i = 1, ilen = ticks.length; i < ilen; i++) {
	// 					tick = ticks[i];
	// 					val = moment(tick.value);
	// 					currMajor = val.get(majorUnit);
	// 					tick.major = currMajor !== lastMajor;
	// 					lastMajor = currMajor;
	// 				}
	// 				return ticks;
	// 			}
	// 		}
	// 	}
	// }
// }


	// const chartContainer = useRef(null);
	// const [chartInstance, setChartInstance] = useState(null)
	
	// useEffect(() => {
	// 	if (chartContainer && chartContainer.current) {
	// 	  const newChartInstance = new Chart(chartContainer.current, chartConfig);
	// 	  setChartInstance(newChartInstance);
	// 	  Chart.render()
	// 	}
	//   }, [chartContainer]);

	//   const updateDataset = (datasetIndex, newData) => {
	// 	chartInstance.data.datasets[datasetIndex].data = newData;
	// 	chartInstance.update();
	//   };
	
	//   const onButtonClick = () => {
	// 	const data = [1, 2, 3, 4, 5, 6];
	// 	updateDataset(0, data);
	//   };


	// var chart = new ApexCharts(document.querySelector("#chart"), options);
	// chart.render();


// var barCount = 60;
// var initialDateStr = '01 Apr 2017 00:00 Z';

// var ctx = document.getElementById('chart').getContext('2d');
// ctx.canvas.width = 240;
// ctx.canvas.height = 240;

// var getRandomInt = function(max) {
// 	return Math.floor(Math.random() * Math.floor(max));		
// };

// function getData(dateStr, count) {
// 	var dateFormat = 'MMMM DD YYYY';
// 	var date = moment(`${dateStr}`, dateFormat);
// 	var data = [randomBar(date, 30)];		
// 	while (data.length < count) {		
// 		date = date.plus({days: 1});		
// 		if (date.weekday <= 5) {			
// 			data.push(randomBar(date, data[data.length - 1].c));
// 		}			
// 	}		
// 	return data;		
// }	


// function randomNumber(min, max) {	
// 	return Math.random() * (max - min) + min;
// }


// function randomBar(date, lastClose) {
// 	var open = randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
// 	var close = randomNumber(open * 0.95, open * 1.05).toFixed(2);
// 	var high = randomNumber(Math.max(open, close), Math.max(open, close) * 1.1).toFixed(2);
// 	var low = randomNumber(Math.min(open, close) * 0.9, Math.min(open, close)).toFixed(2);
// 	return {
// 		t: date.valueOf(),
// 		o: open,
// 		h: high,
// 		l: low,
// 		c: close
// 	};

// }






// var update = function() {
// 	var dataset = chart.config.data.datasets[0];

// 	// candlestick vs ohlc
// 	var type = document.getElementById('type').value;
// 	dataset.type = type;

// 	// linear vs log
// 	var scaleType = document.getElementById('scale-type').value;
// 	chart.config.options.scales.y.type = scaleType;

// 	// color
// 	var colorScheme = document.getElementById('color-scheme').value;
// 	if (colorScheme === 'neon') {
// 		dataset.color = {
// 			up: '#01ff01',
// 			down: '#fe0000',
// 			unchanged: '#999',
// 		};
// 	} else {
// 		delete dataset.color;
// 	}

// 	// border
// 	var border = document.getElementById('border').value;
// 	var defaultOpts = Chart.defaults.elements[type];
// 	if (border === 'true') {
// 		dataset.borderColor = defaultOpts.borderColor;
// 	} else {
// 		dataset.borderColor = {
// 			up: defaultOpts.color.up,
// 			down: defaultOpts.color.down,
// 			unchanged: defaultOpts.color.up
// 		};
// 	}

// 	chart.update();
// };

//   update();

//   document.getElementById('randomizeData').addEventListener('click', function() {
//     chart.data.datasets.forEach(function(dataset) {
//       dataset.data = getData(initialDateStr, barCount);
//     });
//     update();
//   })

	
 
  

	// const theme = useTheme();

	const jokeData = [{
		x: new Date(1538778600000),
		y: [6629.81, 6650.5, 6623.04, 6633.33]
	  },
	  {
		x: new Date(1538780400000),
		y: [6632.01, 6643.59, 6620, 6630.11]
	  },
	  {
		x: new Date(1538782200000),
		y: [6630.71, 6648.95, 6623.34, 6635.65]
	  }]



	var lastDate = 0;
	var data = []
	var TICKINTERVAL = 86400000
	let XAXISRANGE = 777600000
	function getDayWiseTimeSeries(baseval, count, yrange) {
	  var i = 0;
	  while (i < count) {
		var x = baseval;
		var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
	
		data.push({
		  x, y
		});
		lastDate = baseval
		baseval += TICKINTERVAL;
		i++;
	  }
	}
	
	getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
	  min: 10,
	  max: 90
	})
	

	
	function resetData(){
	  // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series 
	  data = data.slice(data.length - 10, data.length);
	}





 









return (
	<React.Fragment>
		
	{/* {loaded && !error ? <div /> : <b>Something went wrong!</b>} */}

	<Title>Stocks to watch:</Title>
	<div id='chart'>
		<CandleStick chartData={jokeData}/>
    </div>

	</React.Fragment>
);

};

export default StockWatch;