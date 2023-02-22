import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Improv() {
  
    async function handleClick() {
      console.log('click handling')
      const response = await fetch('/api/generate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ingredients: inputValue})
      })
      const data = await response.json()
      console.log(data.recipe)
      setRecipe(data.recipe)
    }

    return (
    <div>
      <h1>Improv</h1>
      <button onclick={handleClick}>Button</button>
      
    </div>
    
  )
}
