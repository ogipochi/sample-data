import React, { Component } from 'react';
import Clock from "./component/Clock";
import ClockAnalog from "./component/ClockAnalog";
import Input from "./component/Input";
import InputList from './component/InputList';
import FetchJson from "./component/FetchJson";

class App extends Component {
  render() {
    return (
      <div>
      <Clock/>
      <ClockAnalog/>
      <Input/>
      <InputList/>
      <FetchJson/>
      </div>
    );
  }
}

export default App;
