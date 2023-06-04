import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const {coffee, onCoffeeSold, onClickingEdit} = props;
  return (
    <>
    <h1>Coffee Details</h1>
    <h3>{coffee.name} - {coffee.origin}</h3>
    <p>${coffee.price}</p>
    <p> {coffee.weight}lbs</p>
    <hr />
    <button onClick = {onClickingEdit}> update coffee </button>
    <button onClick = {()=>onCoffeeSold(coffee.id)}> sell</button>
    <br/>
    </>
  )
}

CoffeeDetail.propTypes= {
  coffee: PropTypes.object,
  onCoffeeSold: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;