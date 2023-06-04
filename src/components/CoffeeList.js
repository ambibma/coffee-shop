import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props){
  return(
    <>
    <hr />
    {props.coffeeList.map((coffee) =>
    <Coffee
      whenCoffeeClicked = {props.onTicketSelection}
      name={coffee.name}
      roast = {coffee.roast}
      origin={coffee.origin}
      price = {coffee.price}
      weight={coffee.weight}
      id={coffee.id}
      key = {coffee.id} />
    )}

    </>
  );
}

CoffeeList.propTypes={
  coffeeList: PropTypes.array,
  // onCoffeeSelection: PropTypes.func
};

export default CoffeeList;