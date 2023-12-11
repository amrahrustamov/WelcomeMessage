
import './App.css';
import WelcomeMessage from './WelcomeMessage';

let name = prompt("Ad daxil edin:");
function App() {
  return (
    <div className="App">
      <WelcomeMessage name={name}/>
    </div>
  );
}

export default App;
