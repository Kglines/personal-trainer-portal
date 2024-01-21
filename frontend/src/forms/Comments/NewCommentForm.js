import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createCommentThunk } from '../../store/comment';

const NewCommentForm = ({ closeModal, announcement, user }) => {
  const dispatch = useDispatch();
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      body,
      announcementId: announcement.id,
      userId: user.id
    };

    dispatch(createCommentThunk(payload))
        .then(() => setBody(''))
        .then(() => closeModal())
        .catch((res) => {
            if (res.data && res.data.errors)
            setErrors(res.data.errors)
        })
  };

  return (
    <section className='flex flex-col bg-black text-white w-96'>
      <div className='bg-primary w-full rounded-sm'>
        <h2 className='text-3xl text-center p-2'>New Comment</h2>
        <i
          className='fas rounded-full fa-times text-2xl text-right px-2 right-2 top-3 absolute hover:cursor-pointer hover:border hover:border-collapse hover:border-grey hover:bg-grey hover:text-dark'
          onClick={closeModal}
        ></i>
      </div>
      <div className='px-4 py-2 mt-2 w-full'>
        <form
          className='flex flex-col text-white gap-4 align-top'
          onSubmit={onSubmit}
        >
          <label className='flex'>
            Comment:
            <textarea
              className='bg-dark text-white px-1 mx-2'
              rows={4}
              cols={20}
              autoFocus
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
          <button
            type='submit'
            className='bg-secondary hover:bg-secondaryLight h-8 disabled:bg-dark'
          >
            Comment
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewCommentForm;
