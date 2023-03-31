import './App.css';
import Errorboundary from './Errorboundary';
import Day_5 from './test1';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Day_5 a={["chocalate","icecream","fruits","Cookies"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;

