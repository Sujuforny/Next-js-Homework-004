import { useRouter } from 'next/router'
import React from 'react'
import Cardd from '../components/Cardd';
import { useState } from 'react';
import { useEffect } from 'react';
import { BASE_URL,API_KEY} from '../lib';
export default function Moive() {
    const route = useRouter();
    const [id , setId] =useState("");
    const [data,setdata]=useState({});
    useEffect(()=>{
        fetch(`${BASE_URL}movie/${route.query.id}/videos?api_key=${API_KEY}`).then(r=>r.json()).then(e=>
            {
                setdata(e);
                setId(e.results[0].key);

            }).catch(err=>{
                console.log(err);
            })
       
    }
    ,[])
    console.log(route.query.id)
    console.log(data);
    return (
    <>
        <Cardd title={route.query.title} image={route.query.image} overview={route.query.overview} ID={id} ></Cardd>
    </>
    )
}
