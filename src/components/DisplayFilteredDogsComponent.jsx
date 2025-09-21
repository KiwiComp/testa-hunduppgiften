


function DisplayFilteredDogsComponent({dog, setSelectedDog, setListIsSearched}) {


    return(
        <>
            <article className='displaySingleDog' key={dog.name} onClick={() => setSelectedDog(dog)}>
                <article className="dogImgContainer">
                    <img src={dog.img} alt={dog.name} style={{ width: '100px', height: '100px' }} />
                </article>
                
                <article className="dogInfoContainer">
                    <p><strong>{dog.name}</strong></p>
                </article>
                
            </article>
        </>
    )
}

export default DisplayFilteredDogsComponent;