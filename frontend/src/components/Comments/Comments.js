import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnnouncementCommentsThunk } from '../../store/comment';
import { getOneAnnouncement } from '../../store/announcement';
import { useParams } from 'react-router-dom';

const Comments = ({ user, announcement }) => {
  console.log('USER AND ANNOUNCEMENT IN COMMENTS COMPONENT === ', user, typeof announcement?.id, announcement?.id)
  const dispatch = useDispatch();
  // const { announcementId } = useParams();
  // const announcementIdInt = parseInt(announcementId);
  // console.log('PARAMS === ', typeof parseInt(announcementId));

//   Get One Announcement
  // const announcement = useSelector((state) => state.announcements);
  // useEffect(() => {
  //   dispatch(getOneAnnouncement(announcementIdInt));
  // }, [dispatch, announcementIdInt]);

//   Get The Comments for the Announcement
  // const comments = Object.values(useSelector((state) => state.comments));
  
  // useEffect(() => {
  //   dispatch(getAnnouncementCommentsThunk(announcement?.id));
  // }, [dispatch, announcement?.id]);

  console.log('COMMENTS COMPONENT Announcement === ', announcement?.Comments?.map(comment => comment));

  return (
    <section className='w-4/5 m-auto border-dark flex flex-col justify-center'>
      <div>
        {/* <h2 className='text-center'>Comments</h2> */}
      </div>
      <div>
        {announcement?.Comments?.map((comment) => (
          <div key={comment?.id} className='border border-dark m-4 p-2 flex'>
            <div className='flex flex-col text-left'>
              <div className='text-light flex gap-2 text-center'>
                <p>{user?.firstName}</p>
                <p>{user?.lastName[0]}.</p>
              </div>
              <img
                src={user?.profileImg}
                alt={user?.username}
                className='rounded-full mr-4 place-self-center'
                width={40}
                height={40}
              />
            </div>
            <div className='text-left ml-6'>
              <div className='ml-4 pt-6'>
                <p>{comment?.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
