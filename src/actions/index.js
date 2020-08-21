import { actionTypes } from "../constants"
import history from '../common/history';
import axios from "axios";


export const login = (userData) => {
    console.log(userData)
    const token = sessionStorage.setItem("token","asdfghjkllkjhgfdsa")
   history.push("/dashboard")
    return (dispatch) => {
       return dispatch({
           type: actionTypes.USER_LOGIN,
           payload: token
       })
       
   }
}

export const logout = () => {
    const emptyToken = sessionStorage.removeItem("token")
    return (dispatch) => {
        return dispatch({
            type: actionTypes.USER_LOGOUT,
            payload: emptyToken
        })
       
    }
    
}



export const getEmp = () => {
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




export const getChartData = () => {
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