import React, { Component } from 'react'
import { Modal } from 'antd'

import DetalheAgendamento from '../agendador/detalheAgendamento'

export default class Apontamento extends Component {

  state = {
    addVisible: false

  }

  _openModal = () => {
    this.setState({ addVisible: !this.state.addVisible })
  }

  _closeModal = () => {
    this.setState({ addVisible: false })
  }

  _handleModal = () => {
    this.setState({
      addVisible: !this.state.addVisible,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this._handleModal();
  }

  render() {

    const { data } = this.props
    // console.log(...data)

    return (

      <td className="calender-stiky" onClick={() => this._openModal()} rowSpan={this.props.rowSpan}>

        <h5 >{data.data.client.name}</h5>

        <Modal

          title="Detalhes do Agendamento"
          visible={this.state.addVisible}
          onOk={this.handleOk}
          onCancel={this._handleModal}
        >
          <DetalheAgendamento {...data} />
        </Modal>

      </td>
    )
  }
}
