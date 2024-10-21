import { useState, useEffect } from 'react'
import axios from 'axios'


const ClassCard = ({ index, name, url }) => {
    const [classInfo, setClassInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchClassInfo = async () => {
        try {
            const response = await axios.get(`https://www.dnd5eapi.co${url}`)
            setClassInfo(response.data)
            console.log('Hello')
        }
        catch (err) {
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchClassInfo()
    }, [])

    if(loading) return <p>Loading....</p>


    return (
        <>
            <h1>{name}</h1>
            {classInfo.starting_equipment.length > 0 ? classInfo.starting_equipment.map(equipment => <p>{equipment.equipment.name}</p>) : ''}
        </>
    )
}


export default ClassCard