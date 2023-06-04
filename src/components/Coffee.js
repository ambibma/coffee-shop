import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function Coffee(props){
  return(
    <>
    <div onClick = {() => props.whenTicketClicked(props.id)}></div>
    <h3>{props.name} - {props.roast} </h3>
    <p><em>{props.origin}</em></p>
    <p>{props.price}</p>
    <p>{props.weight}lb</p>
    </>
  )
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired, 
  roast: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string,
  weight: PropTypes.number
}

export default Coffee;