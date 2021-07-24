import React from 'react'
import { CloseIcons, Icon, SidebarBtnWrapper, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute } from './SidebarElement'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcons />
                </Icon>

                <SidebarMenu>
                    <SidebarLink to='/'>
                        Cakes
                    </SidebarLink >
                    <SidebarLink to='/dessert'>
                        Dessert
                    </SidebarLink>
                    <SidebarLink to='/snack'>
                        Snacks
                    </SidebarLink>
                    <SidebarLink to='/cupcakes'>
                        CupCakes
                    </SidebarLink>
                    <SidebarLink to='/fullmenu'>
                        Full Menu
                    </SidebarLink>
                    <SidebarLink to='/fullmenu'>
                        Full Menu
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarRoute to='/checkout' > Order Now</SidebarRoute>
                </SidebarBtnWrapper>
            </SidebarContainer>

        </>
    )
}

export default Sidebar
