import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaTimes } from "react-icons/fa"

export const SidebarContainer = styled.aside `
position: fixed;
z-index: 999;
width: 350px;
height: 100%;
background: #333;
display: grid;
align-items: center;
top: 0;
transition: 0.3s ease-in-out;
right: ${({isOpen}) => (isOpen? 0: '-1000px')};

@media screen and (max-height:400px){
    width:100%;
}
`

export const CloseIcon = styled(FaTimes) `
color: white;
`

export const Icon = styled.div `
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
border: transparent;
cursor: pointer;
outline: none;
`

export const SideMenu = styled.div `
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3,80px);
text-align: center;

@media screen and (max-width:480px) {
    grid-template-rows: repeat(3,60px);
}
`

export const SidebarLink = styled(Link) `
display: flex;
align-items: center;
font-size: 1.5rem;
text-decoration: none;
justify-content: center;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;

&:hover{
    color: #e9ba23;
    transition : 0.2s ease-in-out;
}
`

export const SidebtnWrap = styled.div `
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(Link)`
background: #e31837;
white-space: nowrap;
padding: 16px 64px;
color:#fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
transition: 0.2s ease-in-out;
&:hover{
    transition: 0.2s ease-in-out;
    background: white;
    color: #010606;
}
`
