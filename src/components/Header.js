import React, { Component } from "react";

import '../styles/Header.css';

class Header extends Component {
  onClick = () => {
    this.props.onReset('');
  }

  render() {
    return (
        <header className="header">
            <h1 onClick={ this.onClick }>Remind me</h1>
        </header>
    );
  }
}
export default Header;
