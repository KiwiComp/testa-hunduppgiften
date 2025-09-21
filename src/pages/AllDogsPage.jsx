import { useOutletContext } from "react-router";
import { useState } from 'react';
import OverlaySelectedDogComponent from "../components/OverlaySelectedDogComponent";
import DisplayDogsComponent from "../components/DisplayDogsComponent";
import '../css/AllDogsStyle.css'

import DisplayFilteredDogsComponent from "../components/DisplayFilteredDogsComponent"


function AllDogsPage() {

    const { dogList } = useOutletContext();
    const [selectedDog, setSelectedDog] = useState(null);

    const [searchName, setSearchName] = useState("");

    const [searchList, setSearchList] = useState([]);
    const [listIsSearched, setListIsSearched] = useState(false);

    const [selectedBreed, setSelectedBreed] = useState("");
    const breeds = Array.from(new Set(dogList.map(dog => dog.breed))).sort((a, b) => a.localeCompare(b));


    const searchDogByName = (searchName => {
        setSearchBreed("");
        setSearchList([]);
        let filteredList = dogList.filter(dog =>
            dog.name.toLowerCase().includes(searchName.toLowerCase())
        )
        setSearchList(filteredList);
        if (filteredList.length > 0) {
            setListIsSearched(true);
        }
    })

    const searchDogByBreed = (searchBreed => {
        setSearchName("");
        setSearchList([]);
        let filteredList = dogList.filter(dog =>
            dog.breed.toLowerCase().includes(searchBreed.toLowerCase())
        )
        setSearchList(filteredList);
        if (filteredList.length > 0) {
            setListIsSearched(true);
        }
    })

    const reset = () => {
        setSearchName("");
        // setSearchBreed("");
        setSelectedBreed("");
        setListIsSearched(false);
        setSearchList([]);
    }

    
    return(
        <section className="allDogsPage">
            <h1>All of our dogs</h1>

            <section className="searchContainer">
                <button className="btnSearchAllDogs" onClick={reset}>Display all dogs</button>
                    <article className="filterSearchesContainer">
                        <article className="singleSearch">
                            <input 
                                type="text" 
                                placeholder="Search on dog's name"
                                value={searchName}
                                onChange={(event) => setSearchName(event.target.value)}
                            />

                            <button onClick={() => searchDogByName(searchName)}>Search</button>
                        </article>

                        <article className="singleSearch">
                            <select 
                                value={selectedBreed}
                                onChange={(event) => setSelectedBreed(event.target.value)}
                            >
                                <option value="">-- Choose breed --</option>
                                {breeds.map((breed) => (
                                    <option key={breed} value={breed}>
                                        {breed}
                                    </option>
                                ))}
                            </select>

                            <button onClick={() => searchDogByBreed(selectedBreed)}>Search</button>
                        </article>
                    </article>
                </section>
            <section className="displayAllDogs">

                {listIsSearched ? (
                    searchList.map((dog) => (
                        <DisplayFilteredDogsComponent 
                        dog={dog} 
                        setSelectedDog={setSelectedDog}
                        setListIsSearched={setListIsSearched} />
                    ))
                ) : (
                    dogList.map((dog) => (
                        <DisplayDogsComponent dog={dog} setSelectedDog={setSelectedDog} />
                    ))
                )}

            </section>

            {selectedDog && (

                <OverlaySelectedDogComponent setSelectedDog={setSelectedDog} selectedDog={selectedDog}/>
            )}

        </section>
    )
}

export default AllDogsPage;


