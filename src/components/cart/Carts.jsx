import React from 'react'
import { CartBtn, CartContainer, CartH1, CartItems, CartMenu, CartQty, CartRoute, CartsBtnWrapper, CartsItem, CartTotal, CloseIcons, Icon, ItemName, ItemPrice, Itemprice, TotalPrice, TotalQty } from './CartsElement'
import { useCart } from 'react-use-cart'




const Carts = ({ cartIsOpen, cartToggle, cartItems, editOrder, getOrderQty, increament }) => {

    const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

    // if (isEmpty) return <CartMenu>
    //     <CartH1>Your cart is empty</CartH1>
    // </CartMenu>
    return (
        <>
            <CartContainer cartIsOpen={cartIsOpen}>
                <Icon>
                    <CloseIcons onClick={cartToggle} />
                </Icon>
                <CartMenu>

                    {isEmpty ? (
                        <CartH1>Your cart is empty</CartH1>
                    ) : (
                        <CartItems>
                            <TotalQty >Total Quantity: <span>{totalUniqueItems}</span> </TotalQty>
                            <CartsItem> total Items: {totalItems} </CartsItem>
                            <CartTotal >

                                <TotalPrice>Total Price: <span>$ {cartTotal.toFixed(2)}</span> </TotalPrice>
                                <CartBtn onClick={() => emptyCart()} >Clear Cart</CartBtn>
                            </CartTotal>
                        </CartItems>

                    )}

                </CartMenu>

                {items.map((item, index) => {
                    return <CartMenu key={index} length={items.length}>
                        <CartsItem >
                            <ItemName>{item.name}</ItemName>
                            <CartBtn onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</CartBtn>

                            <CartQty >{item.quantity} </CartQty>

                            <CartBtn onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</CartBtn>
                            <CartBtn onClick={() => removeItem(item.id)} >Remove</CartBtn>
                            <ItemPrice> $ {item.price}</ItemPrice>
                        </CartsItem>

                    </CartMenu>
                })}
                {/* 
                <CartTotal >
                    <TotalQty >Total Quantity: <span>17</span> </TotalQty>
                    <TotalPrice>Total Price: <span>$300</span> </TotalPrice>
                </CartTotal> */}
                <CartsBtnWrapper>
                    <CartRoute to='/' > Checkout</CartRoute>
                </CartsBtnWrapper>
            </CartContainer>
        </>
    )
}

export default Carts


{/* {cartItems.map((item, index) => {
                    return <CartMenu key={index} length={cartItems.length}>
                        <CartsItem >
                            {item.name}
                            <CartBtn onClick={() => increament(item.id)} >-</CartBtn>
                            <CartQty>{getOrderQty(item.id)}</CartQty>
                            <CartBtn onClick={() => editOrder("+", item.price, item.id)} >+</CartBtn>
                        </CartsItem>
length={cartItems.length}
                    </CartMenu>
                })} */}
