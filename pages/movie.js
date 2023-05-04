import React, { useEffect, useState } from 'react';
import CardComponent from './components/CardComponent';
import { API_KEY, BASE_PATH } from './lib';

export default function Movie({movies}) {
    // const [data,setdata]=useState({});
    // useEffect(()=>{
    //     fetch('https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&page=1%60').then(r=>r.json()).then(e=>setdata(e));
    // }
    // ,[])
    // console.log(data);
    const data = movies?.results || [];
    return (
        <>
        <div className='container'>
            <h1>Moive</h1>
            <div className='d-flex justify-content-evenly flex-wrap '>
                {
                    data.map(e=>(
                        <CardComponent title={e.title} image={BASE_PATH+e.poster_path} id={e.id} overview={e.overview}></CardComponent>
                    ))
                }
            </div>
        </div>
        </>
    )
}
//getServerSidePros
export async function getServerSideProps(context) {
    const url=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1%60`;
    const res = await fetch(url);
    const movies = await res.json();
    return {
    props: {
            movies,
        }, 
    }
}

