//import react hooks
import React, { useEffect,useState } from "react"

//import css
import "./chart.css"

//import semantic ui elements
import { Header } from 'semantic-ui-react'

//import action for chart data
import { getChartData } from "../../../actions/index"

//import connect method from redux
import { connect } from "react-redux"

//import chart components from recharts
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ComposedChart,
    Area,
  } from "recharts";



//chart component
  const Chart = (props) => 
  {

    // const data = 
    //   [
    //     {
    //       name: "Page A",
    //       sal: 4000,
    //       lowSal: 2400,
    //       amt: 2400
    //     },
    //     {
    //       name: "Page B",
    //       sal: 3000,
    //       lowSal: 1398,
    //       amt: 2210
    //     },
    //     {
    //       name: "Page C",
    //       sal: 2000,
    //       lowSal: 9800,
    //       amt: 2290
    //     },
    //     {
    //       name: "Page D",
    //       sal: 2780,
    //       lowSal: 3908,
    //       amt: 2000
    //     },
    //     {
    //       name: "Page E",
    //       sal: 1890,
    //       lowSal: 4800,
    //       amt: 2181
    //     },
    //     {
    //       name: "Page F",
    //       sal: 2390,
    //       lowSal: 3800,
    //       amt: 2500
    //     },
    //     {
    //       name: "Page G",
    //       sal: 3490,
    //       lowSal: 4300,
    //       amt: 2100
    //     }
    //   ];


    const [data,setData] = useState([])


    const getSalary = data1 => {
      const index = data.findIndex(obj => obj.employee_salary === data1.employee_salary);
      return data[index].employee_salary
    };
    
    const getAge = data2 => {
      const index = data.findIndex(obj => obj.employee_age === data2.employee_age);
      return data[index].employee_age
    };
    
    const getName = name => {
      const index = data.findIndex(obj => obj.employee_name === name.employee_name);
      return data[index].employee_name
    };

  useEffect(()=>
    {
       props.getChartData()
       setData(props.chartData)
    },[props.chartData.length !== 0])


  return (
    <div className="chart">
        <Header size='large'>Employee salary chart</Header>
        <BarChart
          width={500}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey={getName}/>
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar type="monotone" dataKey={getAge} fill="#8884d8" xAxisId={0} />
          {/* <Bar type="monotone" dataKey={getSalary} fill="#387908" yAxisId={0} /> */}
        </BarChart>
    </div>
   )
  } 


//mapStateToProps function
const mapStateToProps = (state,ownProps) => 
{
   console.log(state.chartReducer.chartData)
   return {
           chartData: state.chartReducer.chartData
          }
}


//export component
export default connect(mapStateToProps,{getChartData})(Chart)