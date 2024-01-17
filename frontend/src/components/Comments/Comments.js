import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnnouncementCommentsThunk } from '../../store/comment';
import { getOneAnnouncement } from '../../store/announcement';
import { useParams } from 'react-router-dom';

const Comments = ({ announcement, user }) => {
  const dispatch = useDispatch();
//   const { announcementId } = useParams();

//   console.log('PARAMS === ', announcementId);

//   Get One Announcement
//   const announcement = useSelector((state) => state.announcements);
//   useEffect(() => {
//     dispatch(getOneAnnouncement(announcementId));
//   }, [dispatch, announcementId]);

//   Get The Comments for the Announcement
  const comments = Object.values(useSelector((state) => state.comments));
  useEffect(() => {
    dispatch(getAnnouncementCommentsThunk(announcement.id));
  }, [dispatch, announcement.id]);

  console.log('COMMENTS COMPONENT Announcement === ', comments);

  return (
    <section className='w-4/5 m-auto border border-dark flex justify-center'>
      <div>
        <h2 className='text-center'>Comments</h2>
      </div>
      <div>
        {comments?.map((comment) => (
          <div key={comment?.id} className='border border-dark m-4 p-4 flex'>
            <div>
              <img
                src={user.profileImg}
                alt={user.username}
                className='rounded-full mr-4'
                width={40}
                height={40}
              />
            </div>
            <div className='flex flex-col text-left'>
              <div>
                <p>{user?.username}</p>
              </div>
              <div className='ml-4'>
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
