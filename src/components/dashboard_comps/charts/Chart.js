import React, { useEffect,useState } from "react"
import "./chart.css"
import { Header } from 'semantic-ui-react'
import { getChartData } from "../../../actions/index"
import { connect } from "react-redux"

import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    ComposedChart,
    Area,
    Bar
  } from "recharts";


const Chart = (props) => {


    const data = [
        {
          name: "Page A",
          sal: 4000,
          lowSal: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          sal: 3000,
          lowSal: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          sal: 2000,
          lowSal: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          sal: 2780,
          lowSal: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          sal: 1890,
          lowSal: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          sal: 2390,
          lowSal: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          sal: 3490,
          lowSal: 4300,
          amt: 2100
        }
      ];

      useEffect(()=>{
        props.getChartData()

      },[props.chartData.length !== 0])


  return (
    <div className="chart">
       <Header size='large'>Employee salary chart</Header>
       <LineChart
          width={350}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
       >
          <XAxis dataKey="name"/>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          {/* <YAxis/> */}
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="sal" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="amt" stroke="#387908" yAxisId={1} />
       </LineChart>
    </div>
  )
}


const mapStateToProps = (state,ownProps) => {
  console.log(state.chartReducer.chartData)
  return {
    chartData: state.chartReducer.chartData
  }
}

export default connect(mapStateToProps,{getChartData})(Chart)