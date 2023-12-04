import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createMachineThunk, fetchMachinesThunk } from '../../store/machine';

const NewMachineForm = ({ onClose }) => {
    const dispatch = useDispatch();

    const [number, setNumber] = useState(null);
    const [manufacturer, setManufacturer] = useState('');
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [dateNew, setDateNew] = useState('');
    const [mileage, setMileage] = useState(null);
    const [hours, setHours] = useState(null);
    const [errors, setErrors] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            number,
            manufacturer,
            type,
            name,
            description,
            image,
            dateNew,
            mileage,
            hours
        }
       
        return dispatch(createMachineThunk(payload))
            .then(() => fetchMachinesThunk())
            .then(() => onClose())
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            }
        );
    }

  return (
    <section className='flex flex-col bg-black text-white w-96'>
      <div className='bg-primary w-full rounded-sm'>
        <h1 className='text-3xl text-center p-2'>New Machine</h1>
        <i
          className='fas fa-times text-2xl text-right p-2 right-0 top-0 absolute hover:cursor-pointer hover:rotate-90 transition ease-in-out'
          onClick={onClose}
        ></i>
      </div>
      <div className='px-4 py-2 mt-2 border border-dark'>
        <form onSubmit={onSubmit} className='flex flex-col text-white gap-4 text-right'>
          <label className='text-white' htmlFor='number'>
            number
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type='number'
              name='name'
              id='name'
              className='text-white bg-dark px-1 mx-2 w-2/3'
              placeholder='424...'
            />
          </label>
          <label className='text-white'>
            manufacturer
            <input type='text' value={manufacturer} onChange={e => setManufacturer(e.target.value)} className='bg-dark text-white px-1 mx-2 w-2/3' placeholder='Precor...' />
          </label>
          <label className='text-white'>
            type
            <input type='text' value={type} onChange={e => setType(e.target.value)} className='bg-dark text-white px-1 mx-2 w-2/3' placeholder='Cardio...' />
          </label>
          <label>
            name
            <input type='text' value={name} onChange={e => setName(e.target.value)} className='bg-dark text-white px-1 mx-2 w-2/3' placeholder='TRM 885...' />
          </label>
          <label>
            description
            <input type='text' value={description} onChange={e => setDescription(e.target.value)} className='bg-dark text-white px-1 mx-2 w-2/3' placeholder='Treadmill...' />
          </label>
          <label>
            image
            <input type='text' value={image} onChange={e => setImage(e.target.value)} className='bg-dark text-white px-1 mx-2 w-2/3' placeholder='Machine Image...' />
          </label>
          <label>
            date new
            <input type='date' value={dateNew} onChange={e => setDateNew(e.target.value)} className='bg-dark text-white px-1 mx-2 w-2/3' placeholder='Installation Date...' />
          </label>
          <label>
            mileage
            <input type='number' value={mileage} onChange={e => setMileage(e.target.value)} className='bg-dark text-white px-1 mx-2 w-2/3' placeholder='250...' />
          </label>
          <label>
            hours
            <input type='number' value={hours} onChange={e => setHours(e.target.value)} className='bg-dark text-white px-1 mx-2 w-2/3' placeholder='22...' />
          </label>
          <button type='submit' className='bg-secondary hover:bg-secondaryLight h-8'>
            Add
            </button>
        </form>
      </div>
    </section>
  );
}

export default NewMachineForm
