import './index.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faHome,  faSearch, faRecordVinyl} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () =>{
    
    const searchBar = document.querySelector("#searchBar")

    const searchResult = {}

    return (
        <div className='nav-bar'>
            <nav className='sidebar'>   
                <NavLink exact="true" activeclassname="active" to="/">
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" size="2x" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/records">
                    <FontAwesomeIcon icon={faRecordVinyl} color="#4d4d4e" size="2x"/>
                </NavLink>
            </nav>
            <form className='searchBarForm'>
                <input id="searchBar" className='searchbar' placeholder='Veuillez cherchez un album'/>
                <button type="submit" onClick={searchResult}>
                    <FontAwesomeIcon icon={faSearch} color="#4d4d4e" size="2x"/>
                </button>
            </form>
            <h1>
                Ma collection de cd
            </h1>
        </div>
    )
}

export default Sidebar