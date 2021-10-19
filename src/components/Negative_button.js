import "./buttons.css";
import { negativeOperator } from "../store/calculator-slice";
import { useDispatch } from "react-redux";

const NegativeButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      id={props.id}
      className="buttons operands"
      onClick={() => dispatch(negativeOperator(props.value))}
    >
      {props.value}
    </button>
  );
};

export default NegativeButton;
