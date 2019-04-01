import React from 'react';
//import Login from "./component/Login";
import Paperbase from "./component/material-ui/Paperbase";
//import Tables from "./component/Tables";
import Steps from "./component/register/Steps";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Paperbase />
        <Steps />
      </div>
    );
  }
}

export default App; 
