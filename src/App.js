import './App.css';
import Welcome from "./components/Footer";
import BigShoppingCard from "./components/BigShoppingCard";
import SmallShoppingCard from "./components/SmallShoppingCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BigShoppingCard/>
          <SmallShoppingCard/>
        <Welcome name={'andrey'}/>
      </header>
    </div>
  );
}

export default App;
