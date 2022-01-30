import { useState} from "react";
// import Character from "./Character";
const Characters = (residents) => {
  const [resident, setResident] = useState([]);

  // useEffect((char) => {
  //   fetch(`${char}`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setLocations(data.results);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const getChar = (char) => {
    // console.log(char["residents"])
    fetch(char["residents"])
    .then((r)=>r.json())
    .then((data)=>{
        setResident(data.image)
    })
  }

  return (
    <div>
      {residents ? getChar(residents): null}
      {resident ? <img src={resident}></img>: null}
    </div>
  )
};

export default Characters;
