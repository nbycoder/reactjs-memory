import React, { useState, useEffect } from 'react';
import { Btn, Container } from '../styles/App'
import { GlobalStyle } from '../styles/Global'
import Card from './Card';
import { CardGrid } from '../styles/Cards';
import MetaData from './MetaData';

const cardImgs = [
  {
    "src": "img/helmet-1.png?raw=true",
    matched: false
  },
  {
    "src": "img/potion-1.png?raw=true",
    matched: false
  },
  {
    "src": "img/ring-1.png?raw=true",
    matched: false
  },
  {
    "src": "img/scroll-1.png?raw=true",
    matched: false
  },
  {
    "src": "img/shield-1.png?raw=true",
    matched: false
  },
  {
    "src": "img/sword-1.png?raw=true",
    matched: false
  }
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [cardOne, setCardOne] = useState(null)
  const [cardTwo, setCardTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    //! duplicate images
    const shuffledCards = [...cardImgs, ...cardImgs]
      .sort(() => Math.random() - 0.5) //! shuffle cards (less than 0, order stays the same, bigger than 0 order changes)
      .map((card) => ({ ...card, id: Math.random })) //! add random id

    setCards(shuffledCards)
    setTurns(0)
  }

  //? handle a choice
  const handleChoice = (card) => {
    //! if cardOne = null, update cardOne state (select the card as the first choice)
    //! else update cardTwo state (select the card as the second choice)

    cardOne ? setCardTwo(card) : setCardOne(card)
  }

  //? compare cards using source (card.src?) and see if they match, if they do, output to the console (match!) if not log that to the console
  useEffect(() => {
    if (cardOne && cardTwo) {
      setDisabled(true) //? make cards unclickable until this check ran
      if (cardOne.src === cardTwo.src) {
        setCards(PrevCards => {
          return PrevCards.map(card => {
            if (card.src === cardOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [cardOne, cardTwo])
  console.log(cards)

  //! reset state and add to turns
  const resetTurn = () => {
    setCardOne(null)
    setCardTwo(null)
    setTurns(prevTurn => prevTurn + 1)
    setDisabled(false)
  }

  //! start a new game automatically
  useEffect(() => {
    shuffleCards()
    setCardOne(null)
    setCardTwo(null)
  }, [])

  return (
    <>
      <MetaData />
      <GlobalStyle />
      <Container>
        <h1>Magic Match</h1>
        <Btn onClick={shuffleCards}>New Game</Btn>

        <CardGrid>
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === cardOne || card === cardTwo || card.matched}
              //! when should flipped return true
              //? first card the user chooses
              //? second card the user chooses
              //? cards match
              disabled={disabled}
            />
          ))}
        </CardGrid>
        <p className="turn">Turns: {turns}</p>
      </Container>
    </>
  );
}

export default App