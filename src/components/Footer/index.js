import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,ScocialIcons,SoicialLogo,ScocialIconsLink} from './FooterItems'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                   <SocialMediaWrap>
                    <SoicialLogo to='/'>Burger</SoicialLogo>
                    <ScocialIcons>
                        <ScocialIconsLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook/>
                        </ScocialIconsLink>
                        <ScocialIconsLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter/>
                        </ScocialIconsLink>
                        <ScocialIconsLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram/>
                        </ScocialIconsLink>
                        <ScocialIconsLink href='/' target='_blank' aria-label='Youtube'>
                            <FaYoutube/>
                        </ScocialIconsLink>
                    </ScocialIcons>
                    </SocialMediaWrap> 
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
