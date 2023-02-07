import React from 'react';
import './BookingForm.css';
import { useState, useReducer } from 'react';


function BookingForm({updateForm}) {

    const initializeTimes = ['--','16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const updateTimes = (state, action) =>{
      if(action.type === 'time'){
        return {
          ...state,
          [action.time]: action.value
          /*time: state.time.filter(x => !bookedTimes.includes(x)),*/
        };
      }
      else{
        return state
      }
      }
  
  
  
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    console.log('Booking form availableTimes');
    console.log(availableTimes);
    
    const [form, setForm] = useState({
        date: '',
        time:'',
        nrguest:'1',
        occasion: '',

    });

    const handleSubmit = (e) => {
        e.preventDefault();

        updateForm(form);

        setForm({
            date:'',
            time:'',
            nrguest:'',
            occasion: '',

        })
        //console.log('form.time');
        //console.log(form.time);
        
        //dispatch({type:'time'});

        //console.log(dispatch);


      };
    return (
      <>
<div className='content-wrapper'>

    <div className="content">
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input 
            type="date" 
            id="res-date" 
            value={form.date} 
            onChange={e => {
                setForm({
                ...form,
                date: (e.target.value)
            });
            }}/>
            {form.date}
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" 
            value={form.time}  
            onChange={e => {
              setForm({
              ...form,
              time: (e.target.value)
          });
          }}>
                {availableTimes.map((time, index) =>
                <option key={index}>{time}</option>
                )}
            </select>
            {form.time}
            <label htmlFor="guests">Number of guests</label>
            <input 
            type="number" 
            placeholder="1" 
            min="1" 
            max="10" 
            id="guests"
            value={form.nrguest} 
            onChange={e => {
                setForm({
                ...form,
                nrguest: (e.target.value)
            });
            }} />
            {form.nrguest}
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={form.occasion} onChange={e => {
                setForm({
                ...form,
                occasion: (e.target.value)
            });
            }}>
                <option>--</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {form.occasion}
            <button type="submit" disabled={!form.date}>Make Your reservation</button>
        </form>
    </div>
</div>


          
      </>
    );
  }
  
  export default BookingForm;