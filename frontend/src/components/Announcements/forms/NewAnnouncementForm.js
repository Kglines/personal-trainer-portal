import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAnnouncementThunk,
  getAnnouncementsThunk,
} from '../../../store/announcement';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../index.css';

const NewAnnouncementForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [date, setDate] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userId: sessionUser.id,
      date: date.toString(),
      body,
    };

    dispatch(createAnnouncementThunk(payload))
      .then(() => getAnnouncementsThunk())
      .then(() => onClose())
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  const pickDate = (date) => {
    console.log('DATE PICKED ==== ', date.toString());
    setDate(date);
    // closePicker();
  };

  console.log('Errors === ', errors);

  return (
    <section className='flex flex-col bg-black text-white w-96 border border-dark'>
      <div className='bg-primary w-full rounded-sm'>
        <h1 className='text-3xl text-center p-2'>New Announcement</h1>
        <i
          className='fas rounded-full fa-times text-2xl text-right px-2 right-2 top-3 absolute hover:cursor-pointer hover:border hover:border-collapse hover:border-grey hover:bg-grey hover:text-dark'
          onClick={onClose}
        ></i>
      </div>
      <div className='px-4 py-2 mt-2'>
        <form className='flex flex-col text-white gap-4' onSubmit={onSubmit}>
          <label htmlFor='date' className='text-white'>
            Date:
            {/* <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type='date'
              name='date'
              id='date'
              className='bg-dark text-white px-1 mx-2'
            /> */}
            <DatePicker
              value={date}
              selected={date}
              onChange={pickDate}
              className='bg-dark text-offWhite px-1 mx-2 picker'
              id='date'
              name='date'
            />
          </label>
          <label htmlFor='announcement' className='flex flex-col'>
            Announcement:
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              name='announcement'
              id='announcement'
              cols='30'
              rows='10'
              className='bg-dark py-1 px-2 my-1'
              placeholder='New Announcement here...'
            ></textarea>
          </label>
          {errors.map(error => (
            <p className='text-red'>{error}</p>
          ))}
          <button
            type='submit'
            className='bg-secondary hover:bg-secondaryLight h-8 disabled:bg-dark'
            disabled={!body || !date}
            // href={`mailto:keithglines@yahoo.com?subject='TEST'&body=${body}`}
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewAnnouncementForm;
