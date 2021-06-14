
import './App.css';
import AlertBox from "./AlertBox"
import NumberBox from "./NumberBox"



function App() {
  return (
    <div className="App">
      <AlertBox message= "Goodbye"></AlertBox>
      <AlertBox message= "Hello"></AlertBox>  
      <NumberBox />
    </div>
  );
}

export default App;
