import { GET_PROFESSIONALS, GET_CLIENTS, GET_SERVICES, ADD_NEW_APPOINTMENT, DELETE_SCHEDULE } from './../actions/types'

const intialState = {

    professionals: [],
    clients: [],
    services: [],
    reservations: []
}

export default (state = intialState, action) => {

    switch (action.type) {

        case GET_PROFESSIONALS:
            return { ...state, professionals: action.payload }
        case GET_CLIENTS:
            return { ...state, clients: action.payload }
        case GET_SERVICES:
            return { ...state, services: action.payload }
        case ADD_NEW_APPOINTMENT:
            return { ...state, reservations: [...state.reservations, action.payload] }

        default: return state;
    }

}