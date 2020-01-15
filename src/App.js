import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  state = {
    allPizzas: [],
    currentTopping: "",
    currentSize: "",
    currentVeg: null,
    currentId: 0
  }

  
  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(response => {return response.json()})
    .then((pizzas) => {
      this.setState({
        allPizzas: pizzas
      })
    })
  }
  
  formChangeTopping = (e) => {
    this.setState({currentTopping: e.target.value})}

  formChangeSize = (e) => {
    this.setState({currentSize: e.target.value})}

  formChangeVeg = (e) => {
    if (e.target.value === "Vegetarian") {
      this.setState({currentVeg: true})}
    else if (e.target.value === "Not Vegetarian") {
      this.setState({currentVeg: false})}
  }

  pizzaEdit = (pizza) => {
    this.setState({
      currentTopping: pizza.topping,
      currentSize: pizza.size,
      currentVeg: pizza.vegetarian,
      currentId: pizza.id
    })
  }

  formSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/pizzas/${this.state.currentId}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        body: JSON.stringify({
          topping: this.state.currentTopping,
          size: this.state.currentSize,
          vegetarian: this.state.currentVeg
        })
      }
    )
    // .then(response => {return response.json()})
    // .then(updatedPizza => {
    //   let pizzaObj = this.state.allPizzas.find((pizza) => {
    //     return pizza.id === updatedPizza.id
    //   })
    //   pizzaObj.topping = updatedPizza.topping
    //   pizzaObj.size = updatedPizza.size
    //   pizzaObj.vegetarian = updatedPizza.vegetarian
    // })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          currentTopping={this.state.currentTopping}
          currentSize={this.state.currentSize}
          currentVeg={this.state.currentVeg}
          formChangeTopping={this.formChangeTopping}
          formChangeSize={this.formChangeSize}
          formChangeVeg={this.formChangeVeg}
          formSubmit={this.formSubmit}
        />
        <PizzaList
          allPizzas={this.state.allPizzas}
          pizzaEdit={this.pizzaEdit}
        />
      </Fragment>
    );
  }
}

export default App;





