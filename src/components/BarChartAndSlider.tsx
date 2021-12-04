import React from "react";
// import ReactDOM from "react-dom";
import { SimpleBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { x } from '@xstyled/styled-components'
import BarChart from './BarChart.jsx'


type BarCharAndSliderProps = {
    data: number[],
    pos:number
}
    

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }
  
  

const BarChartAndSlider =  ({ data, pos }: BarCharAndSliderProps): JSX.Element =>{

	var bar_chart_data : {group: string,value:number}[] = []
	var scale_colors : {[key: string]: string} = {}
	data.map((item:number,pos)=>(
		bar_chart_data.push({
			"group": `Category ${pos}`,
			"value": item
		  })
	))
	data.map((item,pos)=>(
		scale_colors[`Category ${pos}`] = getRandomColor()
	))


    var state = {
		data: bar_chart_data,
    options : {
		"title": "Bar Chat with elements and random color",
		"axes": {
		  "left": {
			"mapsTo": "value"
		  },
		  "bottom": {
			"mapsTo": "group",
			"scaleType": "labels"
		  }
		},
		"color": {
			"scale": scale_colors
		},
		"height": "400px",
		"width":"500px"
	  }
	};

	

      return (

		<x.div
		w="100vw"
		h="100vh"
		display="flex"
		margin= "20px;"
		flexDirection="column"
		alignItems="center"
		justifyContent="flex-start"
		mt={5}
	  >
      <x.h1>{pos}. Type : Bar Chart</x.h1>
        <BarChart
			data={state.data}
			options={state.options}/>
		</x.div>
      );
}


export default BarChartAndSlider