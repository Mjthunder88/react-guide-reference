import './App.css';
import StateComponent from './components/StateComponent';
import Header from './components/Header';
import Effect from './components/Effect';

function App() {
  return (
    <div className="App col-container">
      <Header />
      <StateComponent />
      <Effect />
    </div>
  );
}

export default App;
