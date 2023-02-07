import React from 'react';
import './BookingForm.css';
import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';


function BookingForm({updateForm}) {

  const navigate = useNavigate();
  
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
            //const x = stateArray.splice(`${property}`, 1);
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

    
    const [form, setForm] = useState({
        date: 'dd/mm/yyyy',
        time:'',
        nrguest:'1',
        occasion: '',
        sent: false,

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/confirmed-booking', {replace: true});
        updateForm(form);

        setForm({
            date:'',
            time:'',
            nrguest:'',
            occasion: '',
            sent: false,

        })

        dispatch({
          type:'time',
          value: form.time});
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
            
            <button  type="submit" aria-label="Make your reservation" onClick={() => {
                setForm({
                ...form,
                sent: true
            });
            }}  disabled={!form.date}>Make Your reservation</button>
        </form>
    </div>
</div>


          
      </>
    );
  }
  
  export default BookingForm;