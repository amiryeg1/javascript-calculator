import './App.css';
import ButtonsContainer from "./components/Buttons_container"
import {useSelector} from "react-redux"
function App() {
  const inputValue = useSelector((state) => state.cal.input)
  const outputValue = useSelector((state) => state.cal.output)
  return (
    <div className="App">
     <h1>javascript calculator</h1>
    
     <ButtonsContainer/> <br/>
     <div className="IO">
     <span className="output">{outputValue}</span> <br/><br/>
     <span id="display">{inputValue}</span>
     </div>
     
    </div>
  );
}

export default App;
