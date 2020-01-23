import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    let { disabled } = this.props
    return (
      <select disabled={ disabled } className="dropDownContainer">
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    );
  }
}
