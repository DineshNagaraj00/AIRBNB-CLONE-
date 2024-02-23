import React, { useState } from 'react'
import  './Banner.css'
import { Button } from '@mui/material'
import { Search } from '@material-ui/icons'
import Find from './Find'
import { useNavigate } from 'react-router-dom';


function Banner() {
    const history=useNavigate();
  const[showSearch,setShowSearch]=useState(false)

  const handleCheck=() => {
    history('/search')
  }
  return (
    <div className='banner'>
      <div className="banner__search">
        {showSearch && <Find/>}


        <Button
        onClick={ () =>{
          setShowSearch(!showSearch)
        }}
        variant='outlined' className='banner__searchButton'>{showSearch ? "Hide" : "Search Dates"}</Button>
      </div>

       <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a differnt kind of gateway to uncover
            the hidden gems near you.
        </h5>
        <Button variant='outlined'
        onClick={handleCheck}
        >Explore Nearby</Button>
       </div>
    </div>
  )
}

export default Banner