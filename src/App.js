import './App.css';
import Welcome from "./components/Footer";
import BigShoppingCard from "./components/BigShoppingCard";
import SmallShoppingCard from "./components/SmallShoppingCard";
import Header from "./components/Header";
import Find from "./components/FInd";
import Niz from "./components/Niz";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
          <Find/>
          <Niz/>
          <BigShoppingCard/>
          <SmallShoppingCard/>
        <Welcome name={'andrey'}/>
      </header>
    </div>
  );
}

export default App;
