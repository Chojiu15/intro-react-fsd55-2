import {Link} from 'react-router-dom'


const NavBar = () => {
    return(
        <div style={{ display:'flex', justifyContent: 'space-around'}}>
            <Link to='/'>Home</Link>
            <Link to='/dungeon'>Dungeon</Link>
        </div>
    )
}

export default NavBar