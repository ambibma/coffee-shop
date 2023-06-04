import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const {coffee} = props;
  return (
    <>
    <h1>Coffee Details</h1>
    <h3>{coffee.name} - {coffee.origin}</h3>
    <p>{coffee.price}</p>
    <p> {coffee.weight}lbs</p>
    {/* <button onClick = {onClickingSold}></button> */}
    {/* <button = {onClickingEdit}> update cofee</> */}
    </>
  )
}

CoffeeDetail.propTypes= {
  coffee: PropTypes.object,
  // onClickingSold: PropTypes.func,
  // onClickingEdit: PropTypes.func
};

export default CoffeeDetail;