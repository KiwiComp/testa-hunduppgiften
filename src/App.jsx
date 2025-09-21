import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/HeaderComponentStyle.css'
import './css/FooterComponentStyle.css'
import './css/StartPageStyle.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import AllDogsPage from './pages/AllDogsPage'
import { Outlet } from 'react-router'

function App() {

  const [dogList, setDogList] = useState([]);
  const [fourDogsList, setFourDogsList] = useState([]);


  useEffect(() => {
    if (dogList.length === 0) {
      fetchFromApi()
    }
    console.log(dogList)
    
  }, [])


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
    generateFourRandomIndexes(data.record.record);
  }

  const generateFourRandomIndexes = (dogList) => {
    const shuffled = [...dogList].sort(() => 0.5 - Math.random());
    const listOfFourDogs = shuffled.slice(0,4);
    setFourDogsList(listOfFourDogs);
    console.log("Four dogs list: ", listOfFourDogs);
  }


    return (
      <main className='grid'>
        <section className='header'>
          <HeaderComponent />
        </section>

        <section className='mainContent'>
           <Outlet context={{ fourDogsList, dogList }} />
        </section>
         
        <section className='footer'>
          <FooterComponent />
        </section>
      </main>
  )
}

export default App
