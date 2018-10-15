import { GET_PROFESSIONALS, GET_CLIENTS, GET_SERVICES, ADD_NEW_APPOINTMENT, DELETE_SCHEDULE } from "./types";
import { returnProfessionals, returnClients, returnServices } from './../../mocks/apiMocks'

export const getProfessionals = (dispatch) => {
    return function (dispatch) {


        returnProfessionals()
            .then(res => {

                dispatch({
                    type: GET_PROFESSIONALS,
                    payload: res,

                })

            })
    }
}

export const getClients = (dispatch) => {
    return function (dispatch) {


        returnClients()
            .then(res => {

                dispatch({
                    type: GET_CLIENTS,
                    payload: res,

                })

            })
    }
}

export const getServices = (dispatch) => {
    return function (dispatch) {


        returnServices()
            .then(res => {

                dispatch({
                    type: GET_SERVICES,
                    payload: res,

                })

            })
    }
}

export const addNewAppointment = (data, dispatch) => {
    return function (dispatch) {


        returnServices()
            .then(res => {

                dispatch({
                    type: ADD_NEW_APPOINTMENT,
                    payload: data,

                })
            })
    }
}
