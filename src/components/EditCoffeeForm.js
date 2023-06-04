import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "react";

function EditCoffeeForm(props){
  const{coffee} = props;
  function handleEditFormSubmission(e){
    e.preventDefault();
    props.onClickingEdit({
      name: e.target.name.value,
      origin: e.target.origin.value,
      price: e.target.price.value,
      roast: e.target.roast.value,
      id: coffee.id,
      weight: coffee.weight
    })
  }
    return (
      <>
      <ReusableForm
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="update Coffee" />
      </>
    );
  }

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func
}
export default EditCoffeeForm;
