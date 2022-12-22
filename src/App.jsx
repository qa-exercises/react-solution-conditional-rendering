import React from 'react'
import './style.css'
import ItemCard from './components/ItemCard'

/*

💪 Exercise: Conditional rendering

🎯 Your task:
A new prop has been added to the ItemCard component - "isInStock".
When this is true, the item card should display "In stock" at the bottom.
When false, it should display "Out of stock" instead.
Apply the concept of conditional rendering to achieve this.

*/

export default function App() {
  return (
    <main>
      <h1>React Fruit Market</h1>
      <div className="items-grid">
        <ItemCard isInStock={true} symbol="🍎" name="Apple" price={0.3} />
        <ItemCard isInStock={false} symbol="🍍" name="Pineapple" price={1} />
        <ItemCard isInStock={false} symbol="🍉" name="Watermelon" price={4} />
        <ItemCard isInStock={true} symbol="🥝" name="Kiwi" price={0.5} />
      </div>
    </main>
  )
}
