import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneAnnouncementThunk } from '../store/announcement';

const Announcement = () => {
    const { announcementId } = useParams();
    const dispatch = useDispatch();
const idNum = Number(announcementId)

    const announcement = useSelector(state => state.announcements)  

    useEffect(() => {
        dispatch(getOneAnnouncementThunk(idNum))
    }, [dispatch, idNum])

  return (
    <section className='text-offWhite w-3/5 mx-auto text-center pt-4'>
      <div>
        <h1 className='text-4xl'>Announcement</h1>
      </div>
      <div className='m-4 border bg-dark border-dark px-4 py-8 rounded-md'>
        <h2 className='text-2xl '>{announcement.body}</h2>
      </div>
    </section>
  );
}

export default Announcement
