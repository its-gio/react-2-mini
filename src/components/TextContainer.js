import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  updateText = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    let { color, size, fontFamily } = this.props.styles
    const styles = { color: color, fontSize: `${size}px`,  }
    return (
      <div className="textContainer">
        <textarea
          style={ styles }
          onChange={this.updateText}
          value={this.state.text}
          placeholder="Start typing your thoughts here!"
          cols="90"
          rows="30"
        />
      </div>
    );
  }
}
