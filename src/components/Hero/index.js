import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn } from './Heroitems'
import { useState } from 'react'

const Hero = () => {
    const [isOpen,setisOpen]= useState(false)

    const toggle = () =>{
        setisOpen(!isOpen)
    }
    return (
        <>
            <HeroContainer>
                <Navbar toggle={toggle}/>
                <Sidebar toggle={toggle} isOpen={isOpen}/>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Greatest Burger Ever! Available Here</HeroH1>
                        <HeroP>Ready Burgers 60 Seconds</HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero
