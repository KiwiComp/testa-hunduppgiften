import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [dogList, setDogList] = useState([]);


  const fetchFromApi = async () => {
    console.log("1. Click")
    const baseUrl = "https://api.jsonbin.io/v3/b/";
    const binId = "68cd197eae596e708ff3bcf1";
    const apiKey = "$2a$10$HulJZZ.ZrVsw115/WjTVeu.j9MNoofezjJ67C7NKvbK6moVrCYZmy";

    const response = await fetch(`${baseUrl}${binId}`, {
      method: 'GET',
      headers: {
        "X-Master-Key": apiKey
      }
    })
    console.log("2. Reponse.", response)

    const data = await response.json();
    console.log("3. Data.", data)

    setDogList(data.record.record);
    console.log("4. Dog list.", dogList);
  }


  return (
    <section className='displayAllDogs'>
      <button onClick={fetchFromApi}>Fetch</button>
      {dogList.map((dog) => (
        <article className='displaySingleDog' key={dog.name}>
          <img src={dog.img} alt={dog.name} style={{ width: '200px', height: 'auto' }} />
          <p>Name: {dog.name}</p>
          <p>Sex: {dog.sex}</p>
          <p>Breed: {dog.breed}</p>
          <p>Age: {dog.age}</p>
          <p>Owner: {dog.owner.name}</p>
        </article>
      ))}
    </section>
  )
}

export default App
