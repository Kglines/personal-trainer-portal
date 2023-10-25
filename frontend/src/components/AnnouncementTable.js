import React from 'react'

const AnnouncementTable = ({ announcements }) => {
  return (
    <section className='w-full mx-auto'>
      <table className="w-5/6 mx-auto text-lg">
        <thead>
          <tr>
            <th className="border border-white p-2">Date</th>
            <th className="border border-white p-2">Announcement</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((announcement, idx) => (
            <tr key={idx} className="even:bg-dark">
              <td className='border border-white p-2'>{announcement.date}</td>
              <td className='border border-white p-2'>
                {announcement.announcement}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AnnouncementTable
