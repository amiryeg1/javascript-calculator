import "./buttons_container.css";
import "./buttons.css";
import NumbersButton from "./Numbers_button";
import NegativeButton from "./Negative_button";
import OperatorsButton from "./Operators_button";
import ClearButton from "./Clear_button";
import EqualButton from "./Equal_button";

const ButtonsContainer = () => {
  return (
    <div className="buttons-container">
      <NumbersButton id="one" value="1" />
      <NumbersButton id="two" value="2" />
      <NumbersButton id="three" value="3" />
      <OperatorsButton id="add" value="+" />
      <NumbersButton id="four" value="4" />
      <NumbersButton id="five" value="5" />
      <NumbersButton id="six" value="6" />
      <NegativeButton id="subtract" value="-" />
      <NumbersButton id="seven" value="7" />
      <NumbersButton id="eight" value="8" />
      <NumbersButton id="nine" value="9" />
      <OperatorsButton id="multiply" value="*" />
      <ClearButton id="clear" value="clear" />
      <NumbersButton id="zero" value="0" className="zero" />
      <NumbersButton id="decimal" value="." />
      <OperatorsButton id="divide" value="/" />
      
      <EqualButton id="equals" value="=" />
    </div>
  );
};

export default ButtonsContainer;
