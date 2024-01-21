import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteAnnouncementThunk, getAnnouncementsThunk } from '../../store/announcement';


const DeleteAnnouncement = ({ closeModal, announcementId }) => {
    const dispatch = useDispatch();

    

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
    <section className='bg-dark w-full pb-2 text-white'>
      <div>
        <h1 className='bg-primary text-white text-center text-2xl p-2'>
          Delete Announcement
        </h1>
        <i
          className='fas rounded-full fa-times text-2xl text-right px-2 right-2 top-3 absolute hover:cursor-pointer hover:border hover:border-collapse hover:border-grey hover:bg-grey hover:text-dark'
          onClick={closeModal}
        ></i>
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
