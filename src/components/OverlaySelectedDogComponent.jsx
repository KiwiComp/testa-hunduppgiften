


function OverlaySelectedDogComponent({selectedDog, setSelectedDog}) {


    return(
        <>
            <section className="overlaySelectedDog" onClick={() => setSelectedDog(null)}>
                    <section className="overlayWindowSelectedDog" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedDog.name}</h2>
                        <article className="selectedDogContainer">
                            <article className="selectedDogImgContainer">
                                <img src={selectedDog.img} alt="" style={{ width: '300px', height: '300px' }}/>
                            </article>

                            <article className="selectedDogInfoContainer">

                                <article className="selectedDogInfoDogDetailsContainer">
                                    <p><strong>Name:</strong> {selectedDog.name}</p>
                                    <p><strong>Age:</strong> {selectedDog.age} years old</p>
                                    <p><strong>Breed:</strong> {selectedDog.breed}</p>
                                    <p><strong>Sex:</strong> {selectedDog.sex}</p>
                                </article>

                                <article className="selectedDogInfoOwnerDetailsContainer">
                                    <p><strong>Owner:</strong> {selectedDog.owner.name} {selectedDog.owner.lastName}</p>
                                    <p><strong>Phone:</strong> {selectedDog.owner.phoneNumber}</p>
                                </article>
                            </article>
                            
                        </article>
                    </section>
                </section>
        </>
    )
}

export default OverlaySelectedDogComponent;