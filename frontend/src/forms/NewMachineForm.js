import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createMachineThunk } from '../store/machine';

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
        dispatch(createMachineThunk(payload))
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
      <div className='px-4 py-2 mt-2'>
        <form onSubmit={onSubmit}>
          <label className='text-white' htmlFor='number'>
            number
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type='number'
              name='name'
              id='name'
              className='text-white bg-dark px-1 mx-2'
            />
          </label>
          <label className='text-white'>
            manufacturer
            <input className='bg-dark text-white px-1 mx-2' />
          </label>
          <label className='text-white'>
            type
            <input className='bg-dark text-white px-1 mx-2' />
          </label>
          <label>
            name
            <input className='bg-dark text-white px-1 mx-2' />
          </label>
          <label>
            description
            <input className='bg-dark text-white px-1 mx-2' />
          </label>
          <label>
            image
            <input className='bg-dark text-white px-1 mx-2' />
          </label>
          <label>
            date new
            <input className='bg-dark text-white px-1 mx-2' />
          </label>
          <label>
            mileage
            <input className='bg-dark text-white px-1 mx-2' />
          </label>
          <label>
            hours
            <input className='bg-dark text-white px-1 mx-2' />
          </label>
        </form>
      </div>
    </section>
  );
}

export default NewMachineForm
