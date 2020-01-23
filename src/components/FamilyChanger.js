import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  render() {
    return (
      <select disabled={this.props.disabled} onChange={this.props.handleFontFamilyChange} className="dropDownContainer">
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    );
  }
}
