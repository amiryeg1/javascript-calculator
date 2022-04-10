import "./App.css";
import ButtonsContainer from "./components/Buttons_container";
import { useSelector } from "react-redux";
function App() {
  const inputValue = useSelector((state) => state.cal.input);
  const outputValue = useSelector((state) => state.cal.output);
  const handleClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: window.title,
          text: "sample js calculator",
          url: window.location.href,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong", error);
        });
    }
  };
  return (
    <div className="App">
      <h1>javascript calculator</h1>
      <ButtonsContainer /> <br />
      <div className="IO">
        <span className="output">{outputValue}</span> <br />
        <br />
        <span id="display">{inputValue}</span>
      </div>
      <button className="share" onClick={handleClick}>share</button>
    </div>
  );
}

export default App;
