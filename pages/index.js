// import NewHead from './head'
// import Header from './header';
import Main from './main';
import Footer from './footer';
import axios from 'axios';
import LoginForm from './loginForm';
import {useState} from 'react';


const baseUrl ='http://127.0.0.1:8000/';
const tokenUrl = baseUrl+'api/token/';

const Home=()=> {
  const [token, setToken] = useState('');
  const submitHandler = async (e, credintials)=>{
    e.preventDefault();
    axios.post(tokenUrl,credintials).then(data=>{
      setToken(data.data.access)
    });
    console.log(token)
  }
  
  if (!token) return <LoginForm submitHandler={submitHandler}/>
  return (
    <div className='bg-green-100'>
      <Main token={token}/>
    </div>
  )
}

export default Home