import { useParams, useSearchParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import './index.css'

const Record = () =>{

    let {id} = useParams()

    const [dataRecordsets, useDataRecord] = useState([])


    const FetchData = async () => {        
        const response = await fetch(`http://localhost:8080/record/${id}`)
        const data = await response.json()
        const dataRecordsets = data.recordset
        let dataArray = []
        for(let i = 0; dataRecordsets.length > i; i++){
            dataArray.push(
                <div className='contenair'>  
                    <div className='recordDiv'>
                        <img src={require(`../../assets/img/${dataRecordsets[i].record_id}.jpg`)} className='recordList' />                      
                        <div className="infoDiv">
                            <h2 className="titleRecord" key={i}>
                                {dataRecordsets[i].record_artist} - {dataRecordsets[i].record_name}
                            </h2>
                            <a>
                                {dataRecordsets[i].record_note_perso} / 10
                            </a>
                            <a>
                            {dataRecordsets[i].record_summary}
                            </a>
                            </div>
                    </div>
                    <iframe key="1" src={`https://open.spotify.com/embed/album/${dataRecordsets[i].record_spotify_link}?utm_source=generator`} width="300" height="600" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>  
                
            )
        
        }
        useDataRecord(dataArray)
    }

    useEffect(() => {
        FetchData()
    }, [])


    return (
        <div>
        {dataRecordsets}
        </div>
    )
}

export default Record