import React, { useState } from "react";
import { connect } from "react-redux";
import {addNumber, minusNumber, multiplyNumber, divisionNumber, refreshNumber} from "../actions/counts";
import useStyles from "./style"
import useStyles1 from "./style2"

function Calculator(props) {
  const classes = useStyles();
  const classes1 = useStyles1();
  const [value, setValue] = useState(0);
  const handleClick = (actionName) => (e) => {
    props[actionName](value);
    if(actionName =="refresh")
    {
      setValue(0);
    }
  };
 
  const handleChange = (e) => {
    setValue(+e.target.value);
  };

  return (
    <div className={classes1.root}>
      <p>Calculator</p>
      <input value={value} onChange={handleChange} type="number" />
      <button onClick={handleClick("add")} className={classes.root}>Add</button>
      <button onClick={handleClick("minus")} className={classes.root1}>Minus</button>
      <button onClick={handleClick("multiply")}>Multiply</button>
      <button onClick={handleClick("division")}>Devision</button>
      <button onClick={handleClick("refresh")}>Refresh</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (number) => dispatch(addNumber(number)),
    minus: (number) => dispatch(minusNumber(number)),
    multiply: (number) => dispatch(multiplyNumber(number)),
    division: (number) => dispatch(divisionNumber(number)),
    refresh: (number) => dispatch(refreshNumber(number)),
  };
};

export default connect(null, mapDispatchToProps)(Calculator);
