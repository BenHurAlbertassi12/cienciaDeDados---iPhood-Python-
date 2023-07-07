import { Component } from "react";

export default class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      name: 'BenHur Albertassi'
    };

    this.handlePClick = this.handlePClick.bind(this)
  }

  handlePClick() {
    const { name } = this.state
    console.log(`<h1> Clicado</h1> ${name}`);
  }
  render() {

    const { name } = this.state


    return (
      <h1 onClick={()=>this.handlePClick()}>
        { name }
    </h1>
  
    )
  }
}