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
    this.setState({name: 'Albertassi'})
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