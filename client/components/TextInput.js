import React, { Component } from 'react';
import TextDisplay from './TextDisplay'; // Makes textdisplay a child of TextInput

class TextInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: 'initial text'
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type your StarWars here"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <TextDisplay text={this.state.inputText}/>
      </div>
    )
  }

}

export default TextInput
