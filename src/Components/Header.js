import React, { Component } from 'react';

class Header extends Component {
     constructor() {
          console.log('the constructor in Header was called');
          super();
          this.state = {};
     }
     render() {
          return <h1>This is the header</h1>;
     }
}

export default Header;