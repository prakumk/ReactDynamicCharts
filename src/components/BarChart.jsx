import React from "react";
import { SimpleBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";


const BarChart = ({ data, options }) => {

      return (

        <SimpleBarChart
			data={data}
			options={options}>
		</SimpleBarChart>
      );
}


export default BarChart