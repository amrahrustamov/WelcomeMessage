
import './App.css';
import WelcomeMessage from './WelcomeMessage';

function App() {
  let name = prompt("Ad daxil edin:");
  return (
    <div className="App">
      <WelcomeMessage name={name}/>
    </div>
  );
}

export default App;
