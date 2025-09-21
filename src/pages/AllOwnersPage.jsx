import { useOutletContext } from 'react-router';
import { useState } from 'react';
import OverlaySelectedDogComponent from "../components/OverlaySelectedDogComponent";
import '../css/AllOwnersStyle.css'


function AllOwnersPage() {

    const { dogList } = useOutletContext();
    const [selectedDog, setSelectedDog] = useState(null);

    const alphabeticallySortedList = [...dogList].sort((a,b) => a.owner.name.localeCompare(b.owner.name))

    // Gruppera ägare efter första bokstav i namn
    const ownersGroupedByLetter = alphabeticallySortedList.reduce((acc, dog) => {
    const firstLetter = dog.owner.name[0].toUpperCase();
    if (!acc[firstLetter]) {
        acc[firstLetter] = [];
    }
    acc[firstLetter].push(dog);
    return acc;
    }, {});

    

    return(
        <section className="allOwnersPage">
            <h1>All Owners</h1>

            <section className='displayAllOwners'>
                {Object.keys(ownersGroupedByLetter).sort().map(letter => (
                    <div key={letter}>
                    <h2>{letter}</h2>
                    {ownersGroupedByLetter[letter].map(dog => (
                        <article key={dog.owner.phoneNumber} className='displaySingleOwner' onClick={() => setSelectedDog(dog)}>
                            <article className='ownerImgContainer'>
                                <img src={dog.img} style={{ width: '50px', height: '50px' }} />
                            </article>

                            <article className='ownerNameContainer'>
                                <p><strong>Owner</strong></p>
                                <p>{dog.owner.name} {dog.owner.lastName}</p>
                                <p>Phone: {dog.owner.phoneNumber}</p>
                            </article>

                            <article className='ownersDogContainer'>
                                <p><strong>Dog</strong></p>
                                <p>{dog.name}</p>
                                <p>{dog.sex}</p>
                            </article>
                        </article>
                    ))}
                 </div>
            ))}
                {/* {alphabeticallySortedList.map((dog) => (

                    <article key={dog.owner.phoneNumber} className='displaySingleOwner'>
                        <article className='ownerImgContainer'>
                            <img src={dog.img} style={{ width: '50px', height: '50px' }}></img>
                        </article>
                        

                        <article className='ownerNameContainer'>
                            <p><strong>Owner</strong></p>
                            <p>{dog.owner.name} {dog.owner.lastName}</p>
                            <p>Phone: {dog.owner.phoneNumber}</p>
                        </article>

                        <article className='ownersDogContainer'>
                            <p><strong>Dog</strong></p>
                            <p>{dog.name}</p>
                            <p>{dog.sex}</p>
                        </article>

                    </article>
                ))} */}
            </section>

            {selectedDog && (
                <OverlaySelectedDogComponent setSelectedDog={setSelectedDog} selectedDog={selectedDog}/>
            )}

        </section>
    )
}

export default AllOwnersPage;