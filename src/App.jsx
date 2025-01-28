import { useState } from "react";
import "./App.css";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2 },
    { id: 2, name: "China", gold: 3 },
    { id: 3, name: "France", gold: 0 }
  ]);

  // function increaseGold(countryId) {}
  function removeCountry(countryId) {
    setCountries(countries.filter((c) => c.id !== countryId));
  }

  return (
    <>
      <h1>Olympic Countries</h1>
      {countries.map((country) => (
        <Country
          key={country.id}
          country={country}
          // onNewGold={increaseGold}
          removeCountry={removeCountry}
        />
      ))}
    </>
  );
}

export default App;
