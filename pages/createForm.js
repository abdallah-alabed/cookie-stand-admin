import React from 'react'
import { useState } from 'react';
import ReportTable from './reportTable';
import axios from 'axios';

const CreateForm = (props) => {
  const baseUrl = 'http://127.0.0.1:8000/';
  const responsesEndPoint = baseUrl + 'api/v1/cookies/';

  const [NewLocation, setNewLocation] = useState([]);
  const [NewMinmum, setNewMinmum] = useState([]);
  const [NewMaximum, setNewMaximum] = useState([]);
  const [NewAverage, setNewAverage] = useState([]);
  const [FlagTable, setFlagTable] = useState(false);
  const [CountLocations, setCountLocations] = useState(0)


  const formHandler = (e) => {
    e.preventDefault();
    let answer = {
      location: e.target.loc.value,
      minimum: e.target.min.value,
      maximum: e.target.max.value,
      average: e.target.avg.value,
      flag: true,
    };
    setNewLocation(arr => [...arr, answer.location])
    setNewMinmum(answer.minimum)
    setNewMaximum(answer.maximum)
    setNewAverage(answer.average)
    setFlagTable(answer.flag)
    setCountLocations(CountLocations + 1)

    const config = {
      headers: { Authorization: `Bearer ${props.token}` }
    };

    const bodyParameters = {
      'location': answer.location, 
      'minimum_customers_per_hour': answer.minimum,
      'maximum_customers_per_hour': answer.maximum,
      'average_cookies_per_sale': answer.average
    };

    axios.post(responsesEndPoint,bodyParameters ,config)
    
  }
  return (
    <>
      <form onSubmit={formHandler} className='w-9/12 h-48 p-5 m-auto bg-green-400 rounded-lg pb-52 border-1'>
        <h1 className='py-3 text-3xl text-center'>Create Cookie Stand</h1>
        <label className='px-3' >Location</label>
        <input className='px-96' id='loc'></input>
        <div className='inline-block m-auto mt-4 space-x-12'>
          <label className='px-3 text-center' >Minimum customers per hour</label>
          <label className='px-3 text-center' >Maximum customers per hour</label>
          <label className='px-3 text-center max-h-1' >Average Cookies Per Sale</label>
          <button className='absolute h-20 w-44 bg-emerald-500'>Create</button>
          <div className='space-x-20'>
            <input className='my-4' id='min'></input>
            <input className='my-4' id='max'></input>
            <input className='my-4' id='avg'></input>
          </div>
        </div>
      </form>
      {/* {console.log(NewLocation)} */}
      {FlagTable ? <ReportTable location={NewLocation} token={props.token} locationss={props.locationss}/> : <h2 className='p-24 text-center'>No Cookie Stands Available</h2>}

    </>
  )
}

export default CreateForm 
