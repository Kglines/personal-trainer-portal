import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  editAnnouncementThunk,
  getAnnouncements,
  getAnnouncementsThunk,
} from '../../../store/announcement';
import { useModal } from '../../../context/Modal';

const EditAnnouncement = ({ announcement }) => {
  // console.log('Edit Announcement ==== ', announcement)
  const dispatch = useDispatch();

  const { closeModal } = useModal();

  const [date, setDate] = useState(announcement.date);
  const [body, setBody] = useState(announcement.body);
  const [errors, setErrors] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      id: announcement.id,
      date,
      body,
    };

    dispatch(editAnnouncementThunk(payload))
      .then(() => {
        return dispatch(getAnnouncementsThunk());
      })
      .then(() => closeModal())
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };
  return (
    <section className='flex flex-col bg-black text-white w-96'>
      <div className='bg-primary w-full rounded-sm'>
        <h1 className='text-3xl text-center p-2'>Edit Announcement</h1>
        <i
          className='fas rounded-full fa-times text-2xl text-right px-2 right-2 top-3 absolute hover:cursor-pointer hover:border hover:border-collapse hover:border-grey hover:bg-grey hover:text-dark'
          onClick={closeModal}
        ></i>
      </div>
      <form className='flex flex-col text-white gap-4' onSubmit={onSubmit}>
        <label htmlFor='date' className='text-white'>
          Date:
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type='date'
            name='date'
            id='date'
            className='bg-dark text-white px-1 mx-2'
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
          ></textarea>
        </label>
        <button
          type='submit'
          className='bg-secondary hover:bg-secondaryLight h-8 disabled:bg-dark'
          disabled={!body || !date}
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default EditAnnouncement;
