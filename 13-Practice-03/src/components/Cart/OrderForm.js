import { useRef, useState } from "react";
import classes from "./OrderForm.module.css";
const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const [isFormInputsValid, setIsFormInputsValid] = useState({
    name: true,
    street: true,
    district: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const districtInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredDistrict = districtInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredDistrictIsValid = !isEmpty(enteredDistrict);

    setIsFormInputsValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      district: enteredDistrictIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredStreetIsValid && enteredDistrictIsValid;

    if (!formIsValid) {
      return;
    }
    console.log("Submiting your order");

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      district: enteredDistrict,
    });
  };

  const nameClasses = `${classes.control} ${
    isFormInputsValid.name ? "" : classes.invalid
  }`;

  const streetClasses = `${classes.control} ${
    isFormInputsValid.street ? "" : classes.invalid
  }`;

  const districtClasses = `${classes.control} ${
    isFormInputsValid.district ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!isFormInputsValid.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!isFormInputsValid.street && <p>Please enter a valid street</p>}
      </div>
      <div className={districtClasses}>
        <label htmlFor="district">District</label>
        <input ref={districtInputRef} type="text" id="district" />
        {!isFormInputsValid.district && <p>Please enter a valid district</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
