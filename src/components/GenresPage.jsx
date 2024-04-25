import { useEffect, useState } from "react";

export default function GenresPage(){

const [genre, setGenre] = useState({})


const getGenre = async()=>{
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '32cfd0c3edmshcb26c632e9b1885p16df98jsnc933f10e1a4e',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
  }

useEffect(()=>{
    getGenre()
  },[])

  console.log("OOG", genre)

    return(
        <>
            <h1>Bigpage</h1>
        </>
    )
}