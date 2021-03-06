import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();

    this.state = {
      disabled: false,
      color: "black",
      size: 12,
      fontFamily: "Monospace"
    }
  }

  // updateColor
  handleColorChange = (e) => {
    this.setState({ color: e.target.value })
  }

  // updateSize
  handleFontSizeChange = (e) => {
    this.setState({ size: e.target.value })
  }

  // updateFamily
  handleFontFamilyChange = (e) => {
    this.setState({ fontFamily: e.target.value })
  }

  // updateEditStatus
  handleEditStatus = (e) => {
    let result = (e.target.value === "false")
    this.setState({ disabled: result })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          {/* Render EditToggle */}
          <EditToggle handleEditStatus={this.handleEditStatus} />
          {/* Render ColorChanger */}
          <ColorChanger disabled={this.state.disabled} handleColorChange={this.handleColorChange} />
          {/* Render SizeChanger */}
          <SizeChanger disabled={this.state.disabled} handleFontSizeChange={this.handleFontSizeChange} />
          {/* Render FamilyChanger */}
          <FamilyChanger disabled={this.state.disabled} handleFontFamilyChange={this.handleFontFamilyChange} />
        </div>
        <div className="textArea"><TextContainer styles={this.state} /></div>
      </div>
    );
  }
}

export default App;
