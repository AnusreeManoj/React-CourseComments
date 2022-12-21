import "./styles.css";
import Component from "./components/Component";

import Heading from "./components/Heading";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <Component />
    </div>
  );
}

export default App;
