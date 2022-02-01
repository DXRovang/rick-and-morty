import Characters from "./Characters";
import { useState, useEffect } from "react";

const Locations = ({ locations, characters }) => {

  // const formatCharacters = (characters) =>{
  //   const residents = {}
  //   characters.forEach(
  //     resident => {
  //       residents[resident.id] = resident
  //     }
  //   )
  //   return residents
  // }

  // const [characters, setCharacters] = useState({});


  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        console.log(data.info["next"])

        // setCharacters(formatCharacters(data.results));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {
         locations.map((location) => (
            <div className="location" key={location.id}>
              <div>{location.name}</div>
              <div>{location.type}</div>
              <div>{location.dimension}</div>
              <div>
                {location.residents.map((res)=>{

                  return (<Characters residents={res}/>)
                  // const resId = res.match(/\d+/)[0]
                  // const char = characters[resId]
                  // console.log(char)
                  // return char ? (
                  //   <img src={char.image}></img>
                  // ): null
                }
                )}
      
              </div>
            </div>
          ))
        }
    </div>
  );
};

export default Locations;
