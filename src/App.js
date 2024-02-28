import Header from "./components/Header";
import Sidenavbar from "./components/Sidenavbar";
import Bid from "./components/Bid";

import "./App.css";

function App() {
  return (
    <div className="App-container">
      <Header />
      <div className="bid-container">
        <Sidenavbar />
        <Bid />
      </div>
    </div>
  );
}

export default App;
