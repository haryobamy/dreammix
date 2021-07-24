import React from 'react'
import { ProductButton, ProductCard, ProductDesc, ProductHeading, ProductInfo, ProductImg, ProductPrice, ProductsContainer, ProductTitle, ProductWrapper } from './ProductsElement'
import { useCart } from 'react-use-cart'


const Products = ({ data, addToCart, getItem }) => {
    const { addItem } = useCart();
    const [selected, setSelected] = React.useState(false)

    const handleSelect = (item, id) => {
        addToCart(item)
        setSelected(true)
    }

    return (
        <>
            <ProductsContainer>
                <ProductHeading>Choose Your Favorite</ProductHeading>
                <ProductWrapper>
                    {data.map((item, index) => {
                        return <ProductCard key={index}>
                            <ProductImg src={item.img} alt={item.alt} />
                            <ProductInfo>
                                <ProductTitle>{item.name}</ProductTitle>
                                <ProductDesc>{item.desc} </ProductDesc>
                                <ProductPrice> ${item.price} </ProductPrice>
                                <ProductButton onClick={() => addItem(item)} > {item.button} </ProductButton>
                            </ProductInfo>
                        </ProductCard>

                    }
                    )}
                </ProductWrapper>
            </ProductsContainer>
        </>
    )
}

export default Products
