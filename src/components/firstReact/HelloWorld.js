//Como queremos trabjar en JSX ES6 lo primero que tenemos que hacer
//es importar el component de react.
import React, { Component } from "react";

class HelloWorld extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <h2> It´s my first React!</h2>
        <h3>Thanks! for see my tutorial!</h3>
      </React.Fragment>
    );
  }
}

export default HelloWorld;
//Creacion de un componente simple