import React from 'react'
import { SingleCard } from '../styles/Cards'

function Card({card, handleChoice, flipped, disabled}) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        } 
    }

    return (
        <SingleCard key={card.id}>
            <div className={flipped ? "flipped" : ""}>
                <img src={card.src} alt="card back" className="front" />
                <img src="img/cover.png?raw=true" alt="card back" className="back" onClick={handleClick}/>
            </div>
        </SingleCard>
    )
}

export default Card
