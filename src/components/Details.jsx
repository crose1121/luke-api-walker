import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';


const Details = () => {

    const {category,num} = useParams();

    const [info,setInfo] = useState({}) 

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${num}`)
        .then(response=>{
            console.log("Logging response.data: ",response.data);
            setInfo(response.data);
        })
        .catch(err=>console.log("Error: ",err))
    },[category,num])
    
    return (
        <>
            <div>
                {
                    category==="people"?
                        <>
                        <h3>Name: {info.name}</h3>
                        <p>Height: {info.height}</p>
                        <p>Mass: {info.mass}</p>
                        </>:
                    category === 'planets'?
                        <>
                        <h3>Name: {info.name}</h3>
                        <p>Climate: {info.climate}</p>
                        <p>Terrain: {info.terrain}</p>
                        </>:
                    category === 'starships'?
                        <>
                        <h3>Name: {info.name}</h3>
                        <p>Model: {info.model}</p>
                        <p>Manufacturer: {info.manufacturer}</p>
                        </>:
                    category === 'species'?
                        <>
                        <h3>Name: {info.name}</h3>
                        <p>Classification: {info.classification}</p>
                        <p>Average Height: {info.average_height}</p>
                        </>:
                    category === 'films'?
                        <>
                        <h3>Title: {info.title}</h3>
                        <p>Director: {info.director}</p>
                        <p>Producer: {info.producer}</p>
                        </>:
                    category === 'vehicles'?
                        <>
                        <h3>Name: {info.name}</h3>
                        <p>Model: {info.model}</p>
                        <p>Manufacturer: {info.manufacturer}</p>
                        </>:
                        <>
                        <p>You have turned to the dark side</p>
                        </>
                }
            </div>
        </>
    );
};


export default Details;