import "./App.css";
import Navbar from "./Navbar";
import Locations from "./Locations";
import { useState, useEffect } from "react";

// const formatCharacters = (characters) =>{
//   const residents = {}
//   characters.forEach(
//     resident => {
//       residents[resident.id] = resident
//     }
//   )
//   return residents
// }

function App() {
  const [locations, setLocations] = useState([]);
  // const [characters, setCharacters] = useState({});

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setCharacters(formatCharacters(data.results));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((r) => r.json())
      .then((data) => {
        setLocations(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      {locations && <Locations locations={locations} 
      // characters={characters}
      />}
    </div>
  );
}

export default App;
