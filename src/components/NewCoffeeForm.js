import React from "react";
import PropTypes from "prop-types";
import {v4} from 'uuid';
import ReusableForm from "./ReusableForm";
import Coffee from "./Coffee";



function NewCoffeeForm(props){

    function handleNewCoffeeFormSubmission(e)
    {
      e.preventDefault();
      props.onNewCoffeeCreation({
        name: e.target.name.value,
        origin: e.target.origin.value,
        roast: e.target.roast.value,
        price: e.target.price.value,
      

        id: v4()
         

      });
    }
  return (
    <>
     <ReusableForm
      formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Add New Coffee" />    
    </>
  );
}
NewCoffeeForm.propTypes = {onNewCoffeeCreation: PropTypes.func};

export default NewCoffeeForm; 