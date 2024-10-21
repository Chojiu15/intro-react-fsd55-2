import './App.css'
import Card from './components/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'

function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [mySwitch, setMySwitch] = useState(true)
  const [categories, setCategories] = useState([])


  const fetchCategories = async () => {
    try {
      const response = await axios.get(API_URL)
      await setCategories(response.data.categories)
    }
    catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    fetchCategories()
  }, [])

  console.log(categories)


  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px', padding: '15px' }}>
        {categories.map(category => {
          return (
            <Card key={category.idCategory} {...category} />
          )
        })}
      </div>
    </>
  )
}

export default App
