import React from 'react';
import { StyledCard } from './StyledCard';
// import { useHistory } from 'react-router-dom';



export default function Card({ breed, setShowModal, setShowBreed }) {

    return (
        <StyledCard
            onClick={() => {
                setShowBreed(breed)
                setShowModal(true)
            }}
        >
            <div className='contImg'>
                <img src={breed.image} alt="" />
            </div>

            <div className='info'>
                <div>
                    <h2>{breed.name}</h2>
                </div>
                <div className='temp-container'>
                    <h5>Temperament</h5>
                    <div className='temperaments'>
                        {
                            breed.temperaments.map(temp => <p key={temp.id} className='temp'>{temp.name}</p>)
                        }
                    </div>
                </div>
            </div>
        </StyledCard>
    )
}