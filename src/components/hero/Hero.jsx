import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Carts from "../cart/Carts"
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from './HeroElements'

const Hero = ({ cartItems, editOrder, getOrderQty, increament }) => {

    const [isOpen, setIsOPen] = React.useState(false)
    const [cartIsOpen, setCartIsOPen] = React.useState(false)

    const toggle = () => {
        setIsOPen(!isOpen)
    }
    const cartToggle = () => {
        setCartIsOPen(!cartIsOpen)
    }
    return (
        <>

            <HeroContainer>
                <Navbar toggle={toggle} cartToggle={cartToggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Carts cartIsOpen={cartIsOpen} cartToggle={cartToggle} cartItems={cartItems} />

                <HeroContent>
                    <HeroItems>
                        <HeroH1>Greatest Cake Ever</HeroH1>
                        <HeroP>Ready In No Time </HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero
