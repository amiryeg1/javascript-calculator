import "./buttons.css";
import { compute } from "../store/calculator-slice";
import { useDispatch } from "react-redux";

const EqualButton = (props) => {
  const dispatch = useDispatch();

  const computeHandler = () => {
    dispatch(compute());
  };

  return (
    <button id={props.id} className="buttons equal" onClick={computeHandler}>
      {props.value}
    </button>
  );
};

export default EqualButton;
