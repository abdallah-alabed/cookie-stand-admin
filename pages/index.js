import Head from 'next/head'
import { useState } from 'react';

const Home=()=> {

  const [NewLocation, setNewLocation] = useState([]);
  const [NewMinmum, setNewMinmum] = useState([]);
  const [NewMaximum, setNewMaximum] = useState([]);
  const [NewAverage, setNewAverage] = useState([]);
  

  const formHandler = (e)=>{
    e.preventDefault();
    let answer ={
      location:e.target.loc.value,
      minimum:e.target.min.value,
      maximum:e.target.max.value,
      average:e.target.avg.value,
    };
    setNewLocation(answer.location)
    setNewMinmum(answer.minimum)
    setNewMaximum(answer.maximum)
    setNewAverage(answer.average) }
  return (
    <div className='bg-green-100'>
      <Head>
        <title>Create Next App</title>
      </Head>
      <header className='bg-emerald-500'> 
        <h1 className='p-3 text-3xl'>Cookie Stand Admin </h1>
      </header>
      <main className='p-8'>
       <form  onSubmit={formHandler} className='w-9/12 h-48 p-5 m-auto bg-green-400 rounded-lg pb-52 border-1'>
        <h1 className='py-3 text-3xl text-center'>Create Cookie Stand</h1>
        <label className='px-3' >Location</label>
        <input className='px-96' id='loc'></input>
        <div className='inline-block m-auto mt-4 space-x-12'>
        <label className='px-3 text-center' >Minimum customers per hour</label>
        <label className='px-3 text-center' >Maximum customers per hour</label>
        <label className='px-3 text-center max-h-1' >Average Cookies Per Sale</label>
        <button className='fixed h-20 w-44 bg-emerald-500'>Create</button>
        <div className='space-x-20'>
        <input className='my-4' id='min'></input>
        <input className='my-4' id='max'></input>
        <input className='my-4' id='avg'></input>
        </div>
        </div>
       </form>
       
       <h2 className='mt-24 text-center' >Reporting Table Coming Soon ... </h2>
       <h2 className='mt-24 text-center' >'location':'{NewLocation}','minCustomers':'{NewMinmum}', 'maxCustomers': '{NewMaximum}', 'avgCookies': '{NewAverage}' </h2>
      </main>

      <footer className='mt-20 bg-emerald-500'>
        <h1 className='p-3 text-xl'>	&copy; 2021</h1>
      </footer>
    </div>
  )
}

export default Home