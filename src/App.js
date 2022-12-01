import logo from './logo.svg';
import './App.css';
import StateComponent from './component/StateComponent';
import EffectComponent from './component/EffectComponent';
import ContextComponent from './component/ContextComponent';

function App() {
  return (
    <div className="App">
        <StateComponent/>
        <div>
          -------------------------------------------------------------------------------------------------------
        </div>

        <EffectComponent/>

        <div>
          -------------------------------------------------------------------------------------------------------

          <ContextComponent/>
        </div>
    </div>
  );
}

export default App;
