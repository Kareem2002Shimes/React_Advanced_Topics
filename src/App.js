import React from "react";
import ComponentA from "./components/Advanced Topics/Context/ComponentA";
import { UserProvider } from "./components/Advanced Topics/Context/UserContext";

function App() {
  return (
    <div>
      <UserProvider value="Kareem">
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;
