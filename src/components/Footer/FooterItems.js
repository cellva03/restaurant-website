import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.div `
background: #0d0909;
`

export const FooterWrap = styled.div `
padding: 16px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1300px;
margin: 0 auto;

`

export const SocialMedia = styled.div `
max-width: 1300px;
width: 100%;

`

export const SocialMediaWrap = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 16px auto 0 auto;

@media Screen and (max-width:820px){
    flex-direction: column;
}
`

export const SoicialLogo = styled(Link)`
color: white;
display: flex;
justify-content: center;
justify-self: start;
cursor: pointer;
font-size: 1.5rem;
text-decoration: none;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
`

export const ScocialIcons = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;

`

export const ScocialIconsLink =styled.a `
color: white;
font-size: 24px;
`
