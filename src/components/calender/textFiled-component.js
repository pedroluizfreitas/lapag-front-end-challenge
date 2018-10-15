import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { black } from 'material-ui/styles/colors';

export default class TextFiledComponent extends Component {

    state = {
        value: '',
   };
    
  handleChange = () => { 

   
    this.setState({value:this.refs.text.getValue()});
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

            <TextField
                hintText={hintText}
                floatingLabelText={floatingLabelText} 
                fullWidth={true}
                value={this.state.value}
                ref="text"
                onChange = {this.handleChange}
                floatingLabelStyle = {{color:black}}
            />
      </div>
    )
  }
}
