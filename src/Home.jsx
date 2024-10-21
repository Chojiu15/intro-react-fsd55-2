import {useEffect, useState} from 'react'
import axios from 'axios'
import ClassCard from './components/ClassCard'
import NavBar from './components/NavBar'


const Home = () => {

    const [classes, setClasses] = useState(null)

    const fetchClasses = async () => {
        try{
            const response = await axios.get(`https://www.dnd5eapi.co/api/classes/`)
            setClasses(response.data.results)
        }
        catch(err){
            console.log(err)
        }
    }


    useEffect(() => {
        fetchClasses()
    }, [])

    console.log(classes)


    return(
        <>
        <h1>Welcome to D&D</h1>
        {classes && classes.map((element, index) => <ClassCard key={index} {...element} /> )}
        </>
    )
}


export default Home