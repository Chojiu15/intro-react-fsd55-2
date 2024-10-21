import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from "axios"

const Recipes =() => {
    let {categoryName} = useParams()
    const [recipes, setRecipes] = useState(null)

    const fetchRecipes = async () => {
        try{
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
            setRecipes(response.data.meals)
        }
        catch(err){

        }
    }

    useEffect(() => {
        fetchRecipes()
    }, [])
    
    return (
        <>
            <h1>Hello Recipes page</h1>
            {recipes && recipes.map(recipe => {
                return(
                    <div>
                        <h2>{recipe.strMeal}</h2>
                        <img src={recipe.strMealThumb} />
                    </div>
                )
            })}
        </>
    )
}


export default Recipes