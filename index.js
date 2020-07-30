import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import SvgIcon from './SvgIcons/SvgIcons';
import EyeRegular from './SvgIcons/EyeRegular';
//import LightBulbRegular from './SvgIcons/LightBulbRegular';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />

        <EyeRegular className="svg-eye-reg" />
        {
          //<LightBulbRegular className="svg-light-bulb-reg" />
        }

        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
