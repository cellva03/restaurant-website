import React from 'react'
import { Nav,NavLink,NavIcon,Bars} from './Navbaritems'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Burgers</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
