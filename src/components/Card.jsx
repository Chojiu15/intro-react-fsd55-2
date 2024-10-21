import './Card.css'
import { Link } from 'react-router-dom'


const Card = ({ strCategory, strCategoryDescription, strCategoryThumb }) => {
    return (
        <Link to={`/category/${strCategory}`}>
            <div className="card-container">
                <h1>{strCategory}</h1>
                <p>{strCategoryDescription}</p>
                <img src={strCategoryThumb} alt="" />
            </div>
        </Link>
    )
}

export default Card
