import React from "react";
import "./App.css";
import Button from "./kit/components/Button";
import Input from "./kit/components/Input";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div style={{height: 200, justifyContent: 'space-between', display: 'flex', flexDirection: 'column'}}>
          <Input onChange={(e) => console.log("e", e)} value={"value"} />
          <Button label={"Button"} />
        </div>
      </div>
    </div>
  );
}

export default App;
