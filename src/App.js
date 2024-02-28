import Header from "./Components/Header";
import Sidenavbar from "./Components/Sidenavbar";
import Bid from "./Components/Bid";

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
