import React, {useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Search = () => {

    const [categoryList,setCategoryList] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState("");
    const [id,setId] = useState(null);
    const history = useHistory();

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response=>{
            setCategoryList(Object.keys(response.data))
            console.log(response.data)
            setSelectedCategory(Object.keys(response.data)[0])
        })
        .catch(err=>console.log("error: ",err))
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${selectedCategory}/${id}`)
    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="">Search for: </label>
                <select name="search" id="" onChange={(e)=>setSelectedCategory(e.target.value)} >
                    
                    {
                        categoryList.map((item,i)=>{
                            return (
                                <option key={i} value={item}>{item}</option>
                            )
                        })
                    }

                </select>
                <label htmlFor="">ID: </label>
                <input type="number"  onChange={(e)=>setId(e.target.value)}/>
                <button className="btn btn-success" >Search</button>
            </form>
        </div>
    );
};

export default Search;