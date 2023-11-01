import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnnouncementThunk } from '../store/announcement';

const NewAnnouncementForm = ({ onClose }) => {
    const dispatch = useDispatch();

    const [date, setDate] = useState('');
    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            date,
            body
        }
        
        dispatch(createAnnouncementThunk(payload))
            .then(() => onClose())
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    }
  return (
    <section className='flex flex-col bg-black text-white w-96'>
        <div className="bg-primary w-full rounded-sm">
            <h1 className="text-3xl text-center p-2">New Announcement</h1>
            <i className="fas fa-times text-2xl text-right p-2 right-0 top-0 absolute hover:cursor-pointer hover:rotate-90 transition ease-in-out" onClick={onClose}></i>
        </div>
        <div className='px-4 py-2 mt-2'>
            <form className='flex flex-col text-white gap-4' onSubmit={onSubmit}>
                <label htmlFor="date" className='text-white'>Date:
                    <input type="date" name="date" id="date" className='bg-dark text-white px-1 mx-2' />
                </label>
                <label htmlFor="announcement" className='flex flex-col'>Announcement:
                    <textarea name="announcement" id="announcement" cols="30" rows="10" className='bg-dark py-1 px-2 my-1'></textarea>
                </label>
                <button type="submit" className='bg-secondary hover:bg-secondaryLight h-8'>Add</button>
            </form>
        </div>
    </section>
  )
}

export default NewAnnouncementForm
