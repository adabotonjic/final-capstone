import './BookingForm.css';
import { useState } from 'react';

function BookingForm() {

    const [form, setForm] = useState({
        date:'',
        availableTimes:'',
        nrguest:'1',
        occasion: '',
    });

    const handleSubmit = (e) => {

        setForm({
            date:'',
            availableTimes:'',
            nrguest:'',
            occasion: '',
        })

        e.preventDefault();
        console.log('Form submitted');
  
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
            //onChange={e => setDate(e.target.value)}/>
            onChange={e => {
                setForm({
                ...form,
                date: (e.target.value)
            });
            }}/>
            {form.date}
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={form.availableTimes} onChange={e => {
                setForm({
                ...form,
                availableTimes: (e.target.value)
            });
            }}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            {form.availableTimes}
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
                <option>Dinner with a family</option>
                <option>Dinner with fiends</option>
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