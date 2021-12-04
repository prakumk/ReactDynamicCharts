import React from "react";
// import ReactDOM from "react-dom";
import "@carbon/charts/styles.css";
import { x } from '@xstyled/styled-components'
import BarChartSliderBase from './BarChartSliderBase'
import { useState } from 'react'

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
			"group": `Category ${pos+1}`,
			"value": item
		  })
	))
	data.map((item,pos)=>(
		scale_colors[`Category ${pos+1}`] = getRandomColor()
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

	
	const [categories, setCategories] = useState(() => {

		var initialCategories : {title: string,color:string,id:number,value:number}[] = []
	
		data.map((item,pos)=>(
		  initialCategories.push({
			title: `Category ${pos+1}`,
			color: scale_colors[`Category ${pos+1}`],
			id:pos,
			value: item,
		  })
		));
	
		return initialCategories
	
	  })
	
	  const handleCategories = (id: number, value: number): void => {
		// const others = splitAmount(100 - value, categories.length - 1)
		// setCategories((prev) => {
		//   return prev.map((item) => ({
		// 	...item,
		// 	value: item.id === id ? value : others.pop() || 0,
		//   }))
		// })
	  }



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
        <BarChartSliderBase
			state={state} data={categories} handleSlider={handleCategories} />
		</x.div>
      );
}


export default BarChartAndSlider