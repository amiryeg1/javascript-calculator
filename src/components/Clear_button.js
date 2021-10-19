import "./buttons.css";
import { clearInput } from "../store/calculator-slice";
import { useDispatch } from "react-redux";

const ClearButton = (props) => {
  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(clearInput());
  };

  return (
    <button id={props.id} className="buttons clear" onClick={clearHandler}>
      {props.value}
    </button>
  );
};

export default ClearButton;
