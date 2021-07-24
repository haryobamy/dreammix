import React from 'react'
import { FeatureButton, FeatureContainer } from './FeaturesElement'

const Feature = () => {
    return (
        <>
            <FeatureContainer>
                <h1>Cake of the Day</h1>
                <p>Chiffon cake is filled with a Meyer lemon curd and served with lavender cream... </p>
                <FeatureButton>Order Now</FeatureButton>
            </FeatureContainer>

        </>
    )
}

export default Feature
