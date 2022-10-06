import React from 'react'
import './style.css'

function Home() {
  return (
    <div>
        <h1 className='header'>Welcome to Cocktail City</h1>
        <h3 className='quote'> “If life gives you limes, make mojitos” — Jimmy Buffett"</h3>
        <p className='web-description'>
          "If you are in need of strong yet sweet Cocktails you've come to the right place! Cocktail City has amazing margarita recipes for you to try and enjoy. You can also save your favorites recipes by clicking on <em>"Add A Cocktail"</em> at the top of the website. "
        </p>
    </div>
  )
}

export default Home