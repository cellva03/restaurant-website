import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SideMenu,SidebarLink,SidebtnWrap,SidebarRoute} from './SidebarItems'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer onClick={toggle} isOpen={isOpen}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SideMenu>
                <SidebarLink to='/'>Burgers</SidebarLink>
                <SidebarLink to='/'>Desserts</SidebarLink>
                <SidebarLink to='/'>Full Menu</SidebarLink>
            </SideMenu>
            <SidebtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SidebtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
