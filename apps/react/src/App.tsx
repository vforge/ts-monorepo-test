import React from "react";

import { Button, Label } from "@vforge/components";

function App() {
  return (
    <div>
      <Label>Click this button:</Label>
      <Button label="Hi, click me" onClick={() => alert('clicked')}/>
    </div>
  );
}

export default App;
