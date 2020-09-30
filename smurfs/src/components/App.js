import { connect } from 'react-redux'
import React, { Component } from "react";
import { getSmurfs } from '../actions'
import SmurfContainer from './SmurfContainer'
import Form from './Form'
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log("mount")
    this.props.getSmurfs()
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>¡Bienvenidos a Smurf Village!</h1>
        <Form />
        <SmurfContainer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getSmurfs })(App);