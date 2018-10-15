import React, { Component } from 'react'

import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { black } from 'material-ui/styles/colors';

import './calendar.css'

export default class FilterView extends Component {

  state = {
    checked: false,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {

    const { lable, list } = this.props


    const styles = {
      block: { maxWidth: 250, },
      checkbox: {
        marginBottom: 16,
      },
    };

    return (
      <div className="boxBorderd">
        <h4>{lable}</h4>
        <Checkbox
          label="Simple"
          style={styles.checkbox}
        />
        <Checkbox
          label="Simple with controlled value"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <div>
          <RaisedButton primary={true} label="All" />
          <RaisedButton secondary={true} label="Clear" />

        </div>

        <div>

          <DatePicker hintText=" In On Date" floatingLabelStyle={{ color: black }} />

        </div>

      </div>
    )
  }
}