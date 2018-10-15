import React, { Component } from 'react'
import Calendar from './index'
import { Modal, Button } from 'antd';

import Agendador from '../agendador'

export default class CalendarManipulation extends Component {

    state = {
        Addvisible: false
    }

    _handleModal = () => {
        this.setState({
            Addvisible: !this.state.Addvisible,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this._handleModal();
    }

    reserveSolts = () => {

        return this.props.professionals.map(item => {
            return { name: item.nickname, id: item.document_number }
        })
    }

    render() {

        return (
            <div>

                <Button onClick={() => this._handleModal()} >Clique aqui para agendar seus serviços</Button>

                <Calendar
                    start="8:00 am"
                    range={8}
                    increase={30 / 60}
                    reserveSolts={this.reserveSolts()}
                    dayreservations={this.props.reservations}
                />

                {this.state.Addvisible ?

                    <Modal
                        style={{ alignContent: 'center' }}
                        title="Realize suas escolhas..."
                        visible={this.state.Addvisible}
                        onOk={this.handleOk}
                        onCancel={this._handleModal}
                    >
                        <Agendador
                            professionals={this.props.professionals}
                            services={this.props.services}
                            clients={this.props.clients}
                            addNewAppointment={this.props.addNewAppointment}
                            _handleModal={this._handleModal}
                        />
                    </Modal> : undefined}

            </div>
        )
    }
}
