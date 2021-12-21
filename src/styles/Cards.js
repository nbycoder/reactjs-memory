import styled from "styled-components";

export const CardGrid = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px; 
`

export const SingleCard = styled.div`
    position: relative;
    img {
        width: 100%;
        display: block;
        border: 2px solid ${({theme}) => theme.colors.maintext};
        border-radius: 6px;
    }
    .front {
        transform: rotateY(90deg);
        transition: all ease-in 0.2s;
        position: absolute;
    }
    .flipped .front {
        transform: rotateY(0deg);
        transition-delay: 0.2s;
    }
    .back {
        transition: all ease-in 0.2s;
        transition-delay: 0.2s;
    }
    .flipped .back {
        transform: rotateY(90deg);
        transition-delay: 0s;
    }
`
