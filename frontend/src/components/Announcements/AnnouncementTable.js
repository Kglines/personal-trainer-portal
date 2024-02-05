import React from 'react';
import OpenModalButton from '../OpenModalButton';
import EditAnnouncement from '../../forms/Announcements/EditAnnouncement';
import DeleteAnnouncement from './DeleteAnnouncement';
import { NavLink } from 'react-router-dom';
import { useModal } from '../../context/Modal';

const AnnouncementTable = ({ announcements, user }) => {
  const { closeModal } = useModal();
  return (
    <section className='w-full mx-auto'>
      <table className='md:w-5/6 mx-auto text-lg table-auto rounded-md'>
        <thead>
          <tr className='bg-dark'>
            <th className='p-2 w-1/5'>Date</th>
            <th className='p-2'>Announcement</th>
            <th className='p-2'>Comments</th>
            {user.isAdmin && <th className='p-2'>Edit</th>}
          </tr>
        </thead>
        <tbody>
          {announcements.map((announcement, idx) => (
            <tr key={idx} className='even:bg-dark'>
              <td className='p-2'>{announcement?.date?.slice(5, 10)}</td>
              <td className='p-2'>
                <NavLink
                  to={`/announcements/${announcement.id}`}
                  className='hover:text-primary hover:underline'
                >
                  {announcement?.body}
                </NavLink>
              </td>
              <NavLink
                to={`/announcements/${announcement.id}`}
                className='hover:text-primary hover:underline'
              >
                <td className='p-2 flex flex-col h-24 md:h-14 align-middle justify-center'>{announcement?.Comments?.length || 0}</td>
              </NavLink>
              {user.isAdmin && (
                <td className=''>
                  <OpenModalButton
                    buttonColor='none'
                    buttonText={
                      <i className='fa fa-pencil text-white hover:text-primary'></i>
                    }
                    modalComponent={
                      <EditAnnouncement
                        closeModal={closeModal}
                        announcement={announcement}
                      />
                    }
                  />
                  <OpenModalButton
                    buttonColor='none'
                    buttonText={
                      <i className='fa fa-trash text-white hover:text-primary'></i>
                    }
                    modalComponent={
                      <DeleteAnnouncement
                        closeModal={closeModal}
                        announcementId={announcement?.id}
                      />
                    }
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AnnouncementTable;
