import React, { Component } from 'react'

export default class DetalheAgendamento extends Component {

  render() {

    const { data: { client, services }, from, to } = this.props
    const { name } = client

    // console.log(this.props)

    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          {/* Cliente */}
          <label>{`O nome do cliente agendado é : ${name}`}</label>
        </div>

        <div style={{ marginBottom: 10 }}>
          {/* Horário */}
          <label> {`O horário marcado é: ${from} até ${to}`}</label>
        </div>

        <div style={{ marginBottom: 10 }}>
          {/* Serviços */}
          {services.map(({ index, value }) => <label style={{ marginRight: 25 }} key={index}>{`O serviços agendados são : ${value}`}</label>)}
        </div>

        {/* {JSON.stringify(this.props)} */}
      </div>

    )
  }
}