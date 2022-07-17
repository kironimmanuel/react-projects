import React from 'react'
import CocktailList from '../components/ui/CocktailList'
import SearchForm from '../components/form/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home
