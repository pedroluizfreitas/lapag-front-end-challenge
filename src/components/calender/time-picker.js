import React, { Component } from 'react'

import { black } from 'material-ui/styles/colors';
import TimePicker from 'material-ui/TimePicker';
export default class TimePickerComponent extends Component {

    state = {
        value: '',
   };
    
  handleChange = () => { 
   
    this.setState({value:this.refs.text.value});
    console.log("change" ,this.refs.text.value )
}
  render() {

    let{
        input:{onChange ,value ,name},
        hintText,
        floatingLabelText,

    }=this.props

   onChange (this.state.value);
    
    return (
      <div>

           <TimePicker
                hintText={hintText}
                floatingLabelText={floatingLabelText}
                //minutesStep={10}
                ref="text"
               // value={this.state.value}
                onChange = {this.handleChange.bind(this)}
                floatingLabelStyle = {{color:black}}
                fullWidth={true}
            />

           
      </div>
    )
  }
}
