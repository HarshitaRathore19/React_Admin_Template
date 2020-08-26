
// action types
import { actionTypes } from "../constants"

//history
import history from '../common/history';

//axios
import axios from "axios";




//user login action
export const login = (userData) =>
 {
    sessionStorage.setItem("token","asdfghjkllkjhgfdsa")
    history.push("/dashboard")
    return (dispatch) => {
       return dispatch({
                       type: actionTypes.USER_LOGIN,
                       payload: true
                       })
       
                         }
 }




//user logout action
 export const logout = () =>
{
    sessionStorage.removeItem("token")
    return (dispatch) => {
        return dispatch({
                          type: actionTypes.USER_LOGOUT,
                          payload: false
                        })
       
                        }
}




//action for employee data table
export const getEmp = () => 
{
    return (dispatch) => {
        return axios.get(`https://reqres.in/api/users`)
        .then(response => {
            console.log(response.data.data)
            dispatch({
                       type: actionTypes.GET_EMP,
                       payload: response.data.data
                     })
             })
        .catch((err) => {
            console.log(err)
        })
                         }
}




//action for chart data
export const getChartData = () =>
{
    return (dispatch) => {
        return axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
        .then(response => {
            console.log(response.data.data)
            dispatch({
                       type: actionTypes.GET_CHARTDATA,
                       payload: response.data.data
                     })
        })
        .catch((err) => {
            console.log(err)
        })
                         }
}