import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        name="email"
        value={email}
        onChange={e => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      ></input>
    </div>
  );
}

export default App;
