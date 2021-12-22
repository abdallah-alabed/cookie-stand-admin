import React from 'react'
import CreateForm from './createForm'
import axios from 'axios';

let locationss = []
const baseUrl ='http://127.0.0.1:8000/';
const responsesEndPoint = baseUrl+'api/v1/cookies';
// const addedLocationsEndPoint = baseUrl+'api/v1/cookies/';
const Main= (props) => {
    const responses =[]
   
    const config={
        headers: {"Authorization" : `Bearer ${props.token}`}
    }
    axios.get(responsesEndPoint, config).then(res =>{
        responses = res.data;
    });

    axios.get('http://127.0.0.1:8000/api/v1/cookies/', config).then(res=>{
        res.data.map(e=>{
            locationss.push(e['location'])
        })
        
    })
    
    return (
        <>
        <main className='p-8 bg-green-100'>  
        < CreateForm token={props.token} locationss={locationss}/>    
        </main>
 
        </>
    )
}

export default Main
