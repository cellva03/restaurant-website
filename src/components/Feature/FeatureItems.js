import styled from 'styled-components'
import bg2 from '../../images/burger-bg2.jpg'

export const FeatureContainer = styled.div `
background: linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(${bg2});
height: 100vh;
max-height: 700px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
text-align: center;
padding: 0 1rem;
 h1{
     font-size: clamp(3rem,5vw,5rem);
 }
 p{
     font-size: clamp(1rem,3vw,2rem);
     margin-bottom: 1rem;
 }

`

export const FeatureBtn = styled.button `
font-size: 1.4rem;
padding: 0.6rem 3rem;
border: none;
background:#e31837;
color: white;
transition: 0.2s ease-out;

&:hover{
    color: black;
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
}
`