import React from "react";
// import ReactDOM from "react-dom";
import { SimpleBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { x } from '@xstyled/styled-components'


// type BarCharAndSliderProps = {
//     data: number[],
//     pos:number
// }
    

// var options = {
//     plugins: {
//       datalabels: {
//         // formatter: function(value, context) {
//         //   console.log(value)
//         //   return context.chart.data.labels[context.dataIndex];
//         // },
//         color: function(context:any) {
//           return context.dataset.backgroundColor;
//         },
//         align: "top",
//         anchor: "end",
//         padding: -4,
//         font: {
//           size: "16",
//           weight: "bold"
//         }
//       }
//     }
//   };
  

const BarCharAndSlider = ({ data, pos }) => {

	var bar_chart_data = []
	data.map((item,pos)=>(
		bar_chart_data.push({
			"group": `Category ${pos}`,
			"value": item
		  })
	))

    var state = {
		data: bar_chart_data,
    options: {
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
        <SimpleBarChart
			data={state.data}
			options={state.options}>
		</SimpleBarChart>
		</x.div>
      );
}


export default BarCharAndSlider