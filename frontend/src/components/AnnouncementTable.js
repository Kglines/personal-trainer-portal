import React from 'react'

const AnnouncementTable = ({ announcements, user }) => {
  return (
    <section className='w-full mx-auto'>
      <table className="w-5/6 mx-auto text-lg table-auto rounded-md">
        <thead>
          <tr className='bg-dark'>
            <th className="p-2">Date</th>
            <th className="p-2">Announcement</th>
            {user.isAdmin && (
              <th className='p-2'>
                Edit
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {announcements.map((announcement, idx) => (
            <tr key={idx} className="even:bg-dark">
              <td className='p-2'>{announcement.date.slice(5, 10)}</td>
              <td className='p-2'>
                {announcement.body}
              </td>
              {user.isAdmin && (
                <td>
                  <i className='fa fa-pencil m-1 text-offWhite hover:cursor-pointer'></i>
                  <i className='fa fa-trash m-1 text-primary hover:cursor-pointer'></i>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AnnouncementTable
