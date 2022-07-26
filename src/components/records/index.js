import './index.css'
import {useState, useEffect} from 'react'
import Record from '../record';
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import {Switch} from 'react-router'

const Records = () =>{
    const genre = document.querySelector("#genre-select")
    const [users, setUsers] = useState([])
    const [dataRecord, setDataRecord] = useState([])
    
    const FetchData = async () => {        
        const response = await fetch("http://localhost:8080/lines")
        const data = await response.json()
        const dataTest = data.recordset
        const dataRecordsets = [...dataTest].sort((a,b)=>{
            return a.record_artist> b.record_artist ? 1 : -1
        })
        console.log(response)
        let dataArray = []
        for(let i = 0; dataRecordsets.length > i; i++){ 
                dataArray.push(          
                    <div className='record'>
                        <img src={require(`../../assets/img/${dataRecordsets[i].record_id}.jpg`)} className='recordImg' />
                        <div className="infoRecord">
                            <a href={`/record/${dataRecordsets[i].record_id}`}>   
                                <h2 className="titleRecord" key={i}>
                                    {dataRecordsets[i].record_artist} - {dataRecordsets[i].record_name}
                                </h2>
                            </a>
                                <a>
                                    {dataRecordsets[i].record_summary}
                                </a>  
                        </div>
                        
                    </div>
                )

        }
        setUsers(dataArray)
        setDataRecord(dataRecordsets)
    }

    useEffect(() => {
        FetchData()
    }, [])

    const sort = async() =>{
        let dataArray = []
        console.log(dataRecord)
        console.log(genre.value)
        for(let i = 0; dataRecord.length > i; i++){
            if(dataRecord[i].record_genre === genre.value){
            let image = String(dataRecord[i].record_name)
            let imageRegex = image.replace(/ /g, "_")
            let imageRegex2 = imageRegex.replace(/`/g, "_")
            let imageLink = imageRegex2.toLowerCase()    
            dataArray.push(          
                <div className='record'>
                    <img src={require(`../../assets/img/${dataRecord[i].record_id}.jpg`)} className='recordImg' />
                    <div className="infoRecord">      
                            <a href={`/record/${dataRecord[i].record_id}`}>       
                                <h2 className="titleRecord" key={i}>
                                        {dataRecord[i].record_artist} - {dataRecord[i].record_name}
                                </h2>
                            </a> 
                            <a>
                                {dataRecord[i].record_summary}
                            </a>  
                    </div>
                </div>
            )
            }else if(genre.value === ""){
                FetchData()
            }
            setUsers(dataArray)
        }
    }
    
   
   

    return (   
        <div>
            <form>
                <select id="genre-select">
                    <option value="">--Please choose an option--</option>
                    <option value="rap">rap</option>
                    <option value="rock">rock</option>
                    <option value="pop">pop</option>
                    <option value="varieté française">varieté française</option>
                    <option value="OST">OST</option>
                    <option value="Electro">Electro</option>
                    <option value="Renaud">Renaud</option>
                </select>
                <button type="button" onClick={sort} className='search' id="genreSearch">
                    go
                </button>
            </form>
            <div className='contenair'>  
                    {users}
            </div>  
        </div>
    )
}



export default Records