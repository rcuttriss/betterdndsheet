import React from "react";
import "./App.css";
import InventorySlot from "./components/InventorySlot/InventorySlot";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="inv-slot-row">
          <InventorySlot item={"hi"} />
          <InventorySlot item={"hi"} />
          <InventorySlot item={"hi"} />
        </div>
      </header>
    </div>
  );
}

export default App;
