import { useOutletContext } from "react-router";
import { useState } from 'react';
import companyLogo from "../assets/companyLogo.webp";
import '../css/OverlayClickedDogStyle.css'
import OverlaySelectedDogComponent from "../components/OverlaySelectedDogComponent";
import DisplayDogsComponent from "../components/DisplayDogsComponent";



function StartPage() {

    const { fourDogsList } = useOutletContext();
    const [selectedDog, setSelectedDog] = useState(null);


    return(
        <section className="startPage">
            <img src={companyLogo} alt="Company Logo, depicting two dogs" id="bigCompanyLogo"></img>

            <h3>Some of our dogs:</h3>
            <section className="displayAllDogs">
             {fourDogsList.map((dog) => (
                <DisplayDogsComponent dog={dog} setSelectedDog={setSelectedDog}/>
            ))}
            </section>

            {selectedDog && (
                <OverlaySelectedDogComponent setSelectedDog={setSelectedDog} selectedDog={selectedDog}/>
            )}
        </section>
    )
}

export default StartPage;