import { render } from "@testing-library/react";

import React from "react";
import CoffeeList from "./CoffeeList";
import NewCoffeeForm from "./NewCoffeeForm";

class CoffeeControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      stateName: "list",
      mainCoffeeList: [],
      //selectedCoffee: null
    };
  }

  handleClick = () => {
    let nextState=null;

    switch(this.state.stateName){
      case "form":
        nextState= 'list';
        break;
      case "list":
        nextState ='form';
        break;
      default:
        nextState ='list'
        break;
    }
    this.setState(prevState => ({
      stateName:nextState
      //selectedTicket: nextSelectedTicket
    }))
  };
  
  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState(prevState => ({
      mainCoffeeList: newMainCoffeeList
    }));
    this.handleClick()
  };


  render(){
    let currentlyVisibleState=null;
    let buttonText=null;

    switch(this.state.stateName){

      case 'form':
        currentlyVisibleState = <NewCoffeeForm
        onNewCoffeeCreation={this.handleAddingNewCoffeeToList}
        />
        buttonText ="Return To Coffee List";
        break;
      case 'list':
        currentlyVisibleState =<CoffeeList
        coffeeList={this.state.mainCoffeeList}
        // onCoffeeSelection={this.handleChangingSelectedCoffee}
        />
        buttonText="Add New Coffee";
        break;
      default:
        currentlyVisibleState = <CoffeeList 
        coffeeControl={this.state.mainCoffeeList}
        // onCoffeeSelection={this.handleChangingSelectedCoffee}
        />
        buttonText = "Add New Coffee";
        break;
    }
    return(
      <>
      {currentlyVisibleState}
      <button onClick = {this.handleClick}>{buttonText}</button>
      </>
    )
  } 
}
export default CoffeeControl;
