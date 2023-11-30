import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteAnnouncementThunk, getAnnouncementsThunk } from '../../store/announcement';
import { useModal } from '../../context/Modal';


const DeleteAnnouncement = ({ announcementId }) => {
    const dispatch = useDispatch();

    const { closeModal } = useModal();

    const onDelete = () => {
        // delete announcement
        dispatch(deleteAnnouncementThunk(announcementId))
        .then(() => {
            dispatch(getAnnouncementsThunk())
        })
        .then(() => {
            return closeModal()
        })
    }

  return (
    <section className='bg-dark w-full pb-2'>
      <div>
        <h1 className='bg-primary text-white text-center text-2xl p-2'>
          Delete Announcement
        </h1>
      </div>
      <div>
        <p className='text-white p-4'>
          Are you sure you want to delete this announcement?
        </p>
      </div>
      <div className='flex justify-center gap-2'>
        <button
          className='bg-secondary text-offWhite p-2 rounded-sm hover:bg-secondaryLight'
          onClick={() => onDelete()}
        >
          Delete
        </button>
        <button
          className='bg-primary text-offWhite p-2 rounded-sm hover:bg-primaryLight'
          onClick={() => closeModal()}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}

export default DeleteAnnouncement
