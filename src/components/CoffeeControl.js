import React from "react";
import CoffeeList from "./CoffeeList";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";

class CoffeeControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      stateName: "list",
      mainCoffeeList: [],
      selectedCoffee: null,
    
    };
  }

  handleClick = () => {
    let nextState=null;
    let nextSelectedCoffee = this.state.selectedCoffee;

    switch(this.state.stateName){
      case 'coffeeDetail':
        nextState = "list"
        nextSelectedCoffee = null;
        break;
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
      stateName:nextState,
      selectedCoffee: nextSelectedCoffee
    }))
  };
  
  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id ===id)[0];
    this.setState({
      selectedCoffee: selectedCoffee,
      stateName: "coffeeDetails"
    });
  }
  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState(prevState => ({
      mainCoffeeList: newMainCoffeeList
    }));
    this.handleClick()
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({stateName:"editing"});
  }

  
  handleCoffeeSold = (id) => {
    const updatedCoffeeList = this.state.mainCoffeeList.map((coffee) => {
      if (coffee.id === id) {
        if (coffee.weight === 0) {
          return coffee;
        }
        return { ...coffee, weight: coffee.weight - 1 };
      }
      return coffee;
    });
  
    this.setState({
      stateName: 'list',
      mainCoffeeList: updatedCoffeeList,
      selectedCoffee: null
      
    });
  };

  handleEditingCoffeeInListToBeClicked = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
    .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
    .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      stateName: "list"
    });
  }
  
  
  render(){
    let currentlyVisibleState=null;
    let buttonText=null;

    switch(this.state.stateName){
      case "editing":
        currentlyVisibleState =<EditCoffeeForm
        coffee={this.state.selectedCoffee}
        onClickingEdit = {this.handleEditingCoffeeInListToBeClicked}/>
        buttonText="Return To Coffee List"
        break;

      case 'coffeeDetails':
        currentlyVisibleState = <CoffeeDetail
        coffee={this.state.selectedCoffee}
        onClickingEdit = {this.handleEditClick}
        onCoffeeSold = {this.handleCoffeeSold} 
        />
        buttonText= 'Return to Coffee List';
      break;

      case 'form':
        currentlyVisibleState = <NewCoffeeForm
        onNewCoffeeCreation={this.handleAddingNewCoffeeToList}
        />
        buttonText ="Return To Coffee List";
        break;
      case 'list':
        currentlyVisibleState =<CoffeeList
        coffeeList={this.state.mainCoffeeList}
        onCoffeeSelection={this.handleChangingSelectedCoffee}
        // onCoffeeSold={this.handleCoffeeSold}
        />
        buttonText="Add New Coffee";
        break;
      default:
        currentlyVisibleState = <CoffeeList 
        coffeeControl={this.state.mainCoffeeList}
        // onCoffeeSold={this.handleCoffeeSold}
        onCoffeeSelection={this.handleChangingSelectedCoffee}
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
