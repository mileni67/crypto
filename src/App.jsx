import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { getCoins } from "./api/api";
import { CoinsContext } from "./context/coinsContext";

function App() {
  const [balance, setBalance] = useState(50000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
      setFilteredCoins(data.coins);
    }
    fetchData();
  }, [])
  console.log(coins);
  return (
    <>
      <CoinsContext.Provider value={{ coins, filteredCoins }}>
        <Header />
        <Main
          setCoins={setFilteredCoins}
          coins={coins}
          balance={balance}
          setBalance={setBalance}
          filteredCoins={filteredCoins}
        />
      </CoinsContext.Provider>
    </>
  );
}

export default App
