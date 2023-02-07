import React from 'react';
import './BookingForm.css';
import { useState, useReducer } from 'react';


function BookingForm({updateForm, onSubmit }) {


    const initializeTimes = {
      0: '--',
      1: '16:00',
      2: '17:00',
      3: '18:00',
      4: '19:00',
      5: '20:00',
      6: '21:00',
      7: '22:00'
    };

    const updateTimes = (state, action) =>{
      

      if(action.type === 'time'){
        for (const property in state) {
         
          const stateArray = Object.values(state);
         
          if(`${state[property]}` === action.value){
            const x = stateArray.splice(`${property}`, 1);
            /*console.log('qui3')
            console.log(stateArray);*/
            //console.log(x);
            
          }
          state = Object.assign({}, stateArray)
        }
        
          return state;
 
        
      }
      else{
        return {
          ...state,
          time: state.time
        }
      }
      }
  
  
  
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
   /* console.log('Booking form availableTimes');
    console.log(availableTimes);*/
    
    const [form, setForm] = useState({
        date: 'dd/mm/yyyy',
        time:'',
        nrguest:'1',
        occasion: '',

    });

    const handleSubmit = (e) => {
        e.preventDefault();

        updateForm(form);
        onSubmit();
    
        setForm({
            date:'',
            time:'',
            nrguest:'',
            occasion: '',

        })
        
        dispatch({
          type:'time',
          value: form.time});

 

        //  console.log(form.time);




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
   
   {Object.keys(availableTimes).map((time, index) =>
                <option key={index}>{availableTimes[time]}</option>
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
            <button  type="submit" aria-label="Make your reservation" disabled={!form.date}>Make Your reservation</button>
        </form>
    </div>
</div>


          
      </>
    );
  }
  
  export default BookingForm;