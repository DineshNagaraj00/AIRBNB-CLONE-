import React, { useState } from 'react'
import './Find.css'
import {DateRangePicker} from 'react-date-range';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { People } from '@material-ui/icons';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Find() {
  const history=useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  



  function handleCheck() {
    history('/search')
  }

      const selectionRange ={
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      };

      function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
      }


  return (
    <div className='search'>
      <DateRangePicker ranges={
        [selectionRange]}  onChange={handleSelect}
      />
      <h2>
        Number of guests
        <People/>
      </h2>
      <input min={0}
        defaultValue={2}
        type='number' />
        <Button onClick={handleCheck }>Search Airbnb</Button>

      
    </div>
  )
}

export default Find