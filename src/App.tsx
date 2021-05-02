import React from "react";
import { API } from './config'

function App() {
  const [transactionList, setTransactionList] = React.useState([]);
  React.useEffect(() => {
    fetch(`${API}transactions/`)
      .then((r) => r.json())
      .then(setTransactionList);
  }, []);

  return (
    <div className="App">
      <h1>Test site</h1>
      <header className="App-header">
        <p>Transaction list</p>
        {transactionList.map((t: any) => (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px repeat(3, 1fr)",
            }}
          >
            <div>{t.id}</div>
            <div>{t.time}</div>
            <div>{t.native_amount}</div>
            <div>{t.native_amount_usd}</div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
