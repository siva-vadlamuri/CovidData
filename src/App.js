// import logo from './logo.svg';
import "./App.css";
// import UseState from "./components/UseState";
// import SpreedOperatorUseState from "./components/SpreedOperatorUseState";
// import ArrayUseState from "./components/ArrayUseState";
import GetCovidData from "./components/GetCovidData";
//The useState hook let us add state to functional Component
//In classes the state is always object
// with the use of useState the state doesn't have to be an object , it can be array,number,string
// The useState hook returns an array with 2 elements
// 1) The first element is current value of the state, and the 2)second one is state setter function

//When we dealing with arrays and objects  always make sure that we need use spread your state variable and then call the setter function

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <SpreedOperatorUseState /> */}
      {/* <ArrayUseState /> */}
      <GetCovidData />
    </div>
  );
}

export default App;
