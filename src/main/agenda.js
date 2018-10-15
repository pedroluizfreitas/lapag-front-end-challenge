import React, { Component } from 'react'
// import './agenda.css'
// import Agendador from './../components/agendador'
import { connect } from 'react-redux'
import { getProfessionals, getClients, getServices, addNewAppointment, deleteSchedule } from './../redux/actions/agendadorActions'

import Calender from '../components/calender/calendar'
// import { returnClients } from './../mocks/apiMocks'
class Agenda extends Component {

    componentDidMount() {

        const { getProfessionals, getClients, getServices } = this.props
        getProfessionals();
        getClients();
        getServices();
    }
    render() {

        return (
            <div >
                <Calender

                    professionals={this.props.professionals}
                    services={this.props.services}
                    clients={this.props.clients}
                    reservations={this.props.reservations}
                    addNewAppointment={this.props.addNewAppointment}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({

    professionals: state.agendador.professionals,
    services: state.agendador.services,
    clients: state.agendador.clients,
    reservations: state.agendador.reservations,

})

const mapActionsToProps = {
    getProfessionals,
    getClients,
    getServices,
    addNewAppointment,
    // deleteSchedule
}

export default connect(mapStateToProps, mapActionsToProps)(Agenda)