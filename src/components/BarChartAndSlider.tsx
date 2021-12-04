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

	var scale_colors : {[key: string]: string} = {}
	data.map((item,pos)=>(
		scale_colors[`Category ${pos+1}`] = getRandomColor()
	))
	// console.log("Item changed")

	// console.log(scale_colors)

    var state = {
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

		var initialCategories : {title: string,color:string,id:number,value:number,group:string}[] = []
	
		data.map((item,pos)=>(
		  initialCategories.push({
			title: `Category ${pos+1}`,
			color: scale_colors[`Category ${pos+1}`],
			id:pos,
			value: item,
			group:`Category ${pos+1}`,
		  })
		));
	
		return initialCategories
	
	  })
	
	  const handleCategories = (id: number, value: number): void => {
		setCategories((prev) => {
		  return prev.map((item) => ({
			...item,
			value: item.id === id ? value : item.value,
		  }))
		})
		console.log(categories)
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