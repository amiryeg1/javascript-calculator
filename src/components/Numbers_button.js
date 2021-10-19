import "./buttons.css";
import { inputNumber } from "../store/calculator-slice";
import { useDispatch } from "react-redux";

const NumbersButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button
      id={props.id}
      className={`buttons numbers ${props.className}`}
      onClick={() => dispatch(inputNumber(props.value))}
    >
      {props.value}
    </button>
  );
};

export default NumbersButton;
