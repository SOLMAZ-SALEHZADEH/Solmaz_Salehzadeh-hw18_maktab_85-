import logo from './logo.svg';
import './App.css';
import Color from "./component/color/color"
import AdjustColor from './component/AdjustColor/AdjustColor';
import Form from "./component/Form/form.jsx"
function App() {
  return (
    <div className="App">
      <Color/>
      <AdjustColor/>
      <Form/>
    </div>
  );
}

export default App;
