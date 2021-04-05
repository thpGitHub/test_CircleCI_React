import './App.css';
import HidePassword from './hidePassword';
import SuperComponent from './SuperComponent';

function App() {
  return (
    <div className="App">
      <SuperComponent>Salut tout le monde</SuperComponent>
      <HidePassword>azerty123</HidePassword>
    </div>
  );
}

export default App;
