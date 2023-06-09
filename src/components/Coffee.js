import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function Coffee(props){

  return(
    <>
    <div onClick = {() => props.whenCoffeeClicked(props.id)}>
    <h3>{props.name} - {props.roast} </h3>
    <p><em>{props.origin}</em></p>
    {/* <p>{props.price}</p> */}
    <p>{props.weight}lb</p>
    </div>
    {/* <button onClick = {()=> handleCoffeeSold(props.id)}> Sell </button> */}
    </>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired, 
  roast: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string,
  weight: PropTypes.number,
  whenCoffeeClicked: PropTypes.func
  // handleCoffeeSold: PropTypes.func
}
// Coffee.defaultProps = {
//   weight: 130
// }
export default Coffee;