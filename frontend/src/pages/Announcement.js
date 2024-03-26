import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneAnnouncementThunk } from '../store/announcement';
import Comments from '../components/Comments/Comments';
import OpenModalButton from '../components/UI/OpenModalButton';
import { useModal } from '../context/Modal';
import NewCommentForm from '../components/Comments/forms/NewCommentForm';

const Announcement = () => {
  const { announcementId } = useParams();
  const { closeModal } = useModal();
  const [errors, setErrors] = useState([]);
  // console.log('ERRORS in ANNOUNCEMENT COMP === ', errors)

  const dispatch = useDispatch();
  const idNum = parseInt(announcementId);

  const announcement = useSelector((state) => state.announcements);

  console.log('ANNOUNCEMENT in ANNOUNCEMENT COMPONENT === ', announcement)
  const currentUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(getOneAnnouncementThunk(idNum));
  }, [dispatch, idNum]);

  return (
    <section className='text-offWhite w-3/5 mx-auto text-center mt-12'>
      <div>
        <h1 className='text-4xl pb-4'>Announcement</h1>
      </div>
      <div className='m-4 border bg-dark border-dark px-4 py-8 rounded-md'>
        <h2 className='text-2xl '>{announcement?.body}</h2>
      </div>
      <div className='my-6'>
        <OpenModalButton buttonColor='secondary' buttonText='+ Comment' modalComponent={<NewCommentForm closeModal={closeModal} announcement={announcement} user={currentUser} />} />
      </div>
      <div>
        <Comments announcement={announcement} user={currentUser} />
      </div>
    </section>
  );
};

export default Announcement;
