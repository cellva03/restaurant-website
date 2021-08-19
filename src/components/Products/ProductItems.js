import styled from "styled-components";

export const ProductsContainer = styled.div `
    width: 100vw;
    min-height: 100vh;
    padding: calc((100vw-1300px)/2);
    background: #150f0f;
    color: white;
`

export const ProductWrapper = styled.div `
    display: flex;
    margin: 0 auto;
    justify-content: center;
    flex-wrap: wrap;

`

export const ProductCard = styled.div `
width: 300px;
margin: 0 2rem;
line-height: 2;
`

export const ProductImg = styled.img `
height: 300px;
min-height: 300px;
max-width: 100%;
box-shadow: 6px 6px 10px rgb(121, 120, 120);

&:hover{
    transform: scale(1.15,1.15);
    box-shadow: none; 
    cursor: pointer;
}
`

export const ProductInfo = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
text-align: center;
`

export const ProductHeading = styled.h1 `
font-size: clamp(2rem,2.5vw,3rem);
text-align: center;
margin-bottom: 5rem;
`

export const ProductTitle = styled.h2 `
font-weight: 400;
font-size: 1.5rem;
`
export const ProductDesc = styled.p `
margin-bottom: 1rem;
`
export const ProductPrice = styled.p `
margin-bottom: 1rem;
font-size: 2rem;
`

export const ProductBtn = styled.button `
font-size: 1rem;
padding: 1rem;
border: none;
background: #e31837;
color: white;
transition: 0.2s ease-out ;

&:hover{
    transition: 0.2s ease-out;
    background: #ffc500;
    cursor: pointer;
    color: black;
}
`