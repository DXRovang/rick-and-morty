import { useState} from "react";
import Name from './Name'
import Info from './Info'

const Characters = (residents) => {
  const [resident, setResident] = useState([]);
  const [name, setName] = useState([]);
  const [species, setSpecies] = useState([]);
  const [info, setInfo] = useState(false)


  const getChar = (char) => {
    fetch(char["residents"])
    .then((r)=>r.json())
    .then((data)=>{
        setResident(data.image)
        setName(data.name)
        setSpecies(data.species)
    })
  }
  const getInfo = ()=>{
    setInfo(!info)
  }
  
  return (
    <div>
      {residents ? getChar(residents): null}
      <div onClick={getInfo}>
        {resident ? <img src={resident}></img>: null}
      </div>
      {info ? <Info species={species}/>:<Name name={name}/>}
    </div>
  )
};

export default Characters;
