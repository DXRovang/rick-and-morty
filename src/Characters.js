import { useState} from "react";

const Characters = (residents) => {
  const [resident, setResident] = useState([]);
  const [name, setName] = useState([]);


  const getChar = (char) => {
    fetch(char["residents"])
    .then((r)=>r.json())
    .then((data)=>{
        setResident(data.image)
        setName(data.name)
    })
  }

  return (
    <div>
      {residents ? getChar(residents): null}
      <div>
      {resident ? <img src={resident}></img>: null}
      </div>
      {name ? name: null}
      
    </div>
  )
};

export default Characters;
