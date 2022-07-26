import './index.css'
import { useState, useEffect } from 'react'

const Homepage = () =>{
    const [users, setUsers] = useState([])
    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/lines")
        const data = await response.json()
        const dataRecordsets = data.recordset
        
        for(let i = 0; dataRecordsets.length > i; i++){

            // Obtenir album aléatoire 
            let dataArray =[]

            let r = Math.round(Math.random() * (0, dataRecordsets.length))

            let image = String(dataRecordsets[r].record_name)
            let imageRegex = image.replace(/ /g, "_")
            let imageLink = imageRegex.toLowerCase()

            dataArray.push(
                <div className='randomRecord'>
                    <h1>
                        Album aléatoire
                    </h1>
                    <img src={require(`../../assets/img/${imageLink}.jpg`)} className='recordHome'  />
                    <iframe key="3" src={`https://open.spotify.com/embed/album/${dataRecordsets[r].record_spotify_link}?utm_source=generator`} width="80%" height="80" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <a href={`/record/${dataRecordsets[r].record_id}`}>
                            <h2 key="2">
                            {dataRecordsets[r].record_name} - {dataRecordsets[r].record_artist}
                            </h2>
                        </a>
                </div>
            )

            if( i = dataRecordsets.length -1 ){   
                // Obtenir dernier album   

                let image = String(dataRecordsets[i].record_name)
                let imageRegex = image.replace(/ /g, "_")
                let imageLink = imageRegex.toLowerCase()

                dataArray.push(
                    <div className='newRecord'>
                        <h1>
                        Dernier Album ajouté
                        </h1>
                        <img src={require(`../../assets/img/${imageLink}.jpg`)} className='recordHome' />
                        <iframe key="1" src={`https://open.spotify.com/embed/album/${dataRecordsets[i].record_spotify_link}?utm_source=generator`} width="80%" height="80" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        
                        <a href={`/record/${dataRecordsets[i].record_id}`} className="titreCalmant">
                            <h2 key="2">
                            {dataRecordsets[i].record_name} - {dataRecordsets[i].record_artist}
                            </h2>
                        </a>
                    </div>
                )
                
                setUsers(dataArray)
            }               
        }           
    }
        
    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div className='contenair'>
            {users}  
        </div>

    )
}

export default Homepage