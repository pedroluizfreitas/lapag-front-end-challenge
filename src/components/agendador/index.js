import React, { Component } from 'react'
import { Button, Select } from 'antd';
import moment from 'moment';

import { times, duration } from './timeData'

const Option = Select.Option;

export default class Agendador extends Component {

  state = {

    currentPro: '',
    currentService: [],
    currentClients: '',
    cliSearch: '',
    currentHour: '',
    currentDur: '',
    NoOfServices: [{}]

  }

  renderProOptions = () => {

    return (this.props.professionals || []).map(item => {

      return <Option value={item.document_number}>{item.nickname}</Option>

    })
  }

  renderSerOptions = () => {

    let avilableService = (this.props.services || []).filter(d => d.available_professionals.find(c => c.cpf === this.state.currentPro))
    return (avilableService || []).map(item => {

      return <Option value={item.name}>{item.name}</Option>

    })
  }

  renderCliOptions = () => {

    return (this.state.cliSearch || this.props.clients || []).map(item => {

      return <Option value={item}>{item.name}</Option>

    })
  }

  renderHours = () => {

    return (times || []).map(item => {

      return <Option value={item}>{item}</Option>

    })
  }

  renderDuration = () => {

    return (duration || []).map(item => {

      return <Option value={item}>{item}</Option>

    })
  }

  handelProChange = (value) => {
    this.setState({ currentPro: value })
  }

  handelSelectedService = (index, value) => {
    this.setState({ currentService: [...this.state.currentService, { index, value }] })
  }

  handelCliChange = (value) => {
    this.setState({ currentClients: value })
  }

  handelHourChange = (value) => {
    this.setState({ currentHour: value })
  }

  handelDurChange = (value) => {
    this.setState({ currentDur: value })
  }

  handelCliSearch = (value) => {

    if (value) {

      let searchNew = this.props.clients.filter(d => d.name.toUpperCase().includes(value.toUpperCase()))

      alert(JSON.stringify(searchNew))

      this.setState({ cliSearch: searchNew })

    } else {

      alert("here")
      this.setState({ cliSearch: '' })
    }
  }

  convertTime = (time) => {

    const format = 'HH:mm'
    let converted = moment(time, ["h:mm A"]).format("HH:mm");
    converted = moment(time, format)

    return converted

  }

  handeAddClick = () => {

    console.log("currentService", this.state.currentService)
    console.log("currentClients", this.state.currentClients)

    let from = this.convertTime(this.state.currentHour)
    let to = moment(from).add(this.state.currentDur, 'hours').format('h:mm a')

    let obj = {

      from: this.state.currentHour,
      to,
      slotid: this.state.currentPro,
      data: {

        client: this.state.currentClients,
        services: this.state.currentService

      }
    }

    this.props.addNewAppointment(obj)
  
    this.props._handleModal()

  }

  renderServices = () => {
    // console.log('Clicking')

    return (this.state.NoOfServices || []).map((item, index) => {

      return <Select
        defaultValue="Service"
        style={{ marginBottom: 10, width: 300 }}
        onChange={this.handelSelectedService.bind(this, index)}
      >

        {this.renderSerOptions()}
      </Select>

    })
  }

  addNewOption = () => {
    this.setState({ NoOfServices: [...this.state.NoOfServices, {}] })
  }

  render() {

    return (
      <div>

        <Select
          style={{ marginBottom: 10, width: 300 }}
          onChange={this.handelCliChange}
          showSearch
          onSearch={this.handelCliSearch}
          value={this.state.currentClients.name || "Pesquise um cliente..."}
        >
          {this.renderCliOptions()}
        </Select>

        <br />

        <Select
          defaultValue="Selecione um profissional..."
          style={{ marginBottom: 10, width: 300 }}
          onChange={this.handelProChange}
        >
          {this.renderProOptions()}
        </Select>

        <br />

        {this.renderServices()}

        <br />

        <Button type='danger' style={{ marginBottom: 10 }} onClick={() => this.addNewOption()}><strong>+</strong></Button>

        <br />

        <Select
          defaultValue="Selecione o horário..."
          style={{ marginBottom: 10, width: 300 }}
          onChange={this.handelHourChange}
        >
          {this.renderHours()}
        </Select>

        <br />

        <Select
          defaultValue="Selecione a duração..."
          style={{ marginBottom: 10, width: 300 }}
          onChange={this.handelDurChange}

        >

          {this.renderDuration()}
        </Select>

        <Button type='primary' onClick={() => this.handeAddClick()}>Clique aqui para renderizar</Button>

      </div>
    )
  }
}
