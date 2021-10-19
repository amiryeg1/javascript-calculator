import "./buttons.css";
import { addOperator } from "../store/calculator-slice";
import { useDispatch } from "react-redux";

const OperatorsButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      id={props.id}
      className="buttons operands"
      onClick={() => dispatch(addOperator(props.value))}
    >
      {props.value}
    </button>
  );
};

export default OperatorsButton;
