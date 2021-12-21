import React from 'react'
import {Helmet, HelmetProvider } from 'react-helmet-async'

function MetaData() {
    return (
        <div>
           <HelmetProvider> 
            <Helmet>
                <title>Memory Game</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
            </Helmet>
            </HelmetProvider>
        </div>
    )
}

export default MetaData
