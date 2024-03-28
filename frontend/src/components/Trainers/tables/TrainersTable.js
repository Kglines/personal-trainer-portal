import React from 'react'
import { NavLink } from 'react-router-dom'

const TrainersTable = ({ trainers }) => {
  return (
    <table className='w-5/6 mx-auto text-lg table-auto'>
          <thead>
            <tr>
              <th className='border border-dark p-2'>Last Name</th>
              <th className='border border-dark p-2'>First Name</th>
              <th className='border border-dark p-2'>Email</th>
              <th className='border border-dark p-2'>Profile Pic</th>
            </tr>
          </thead>
          <tbody>
            {trainers &&
              trainers?.map((trainer) => (
                <tr key={trainer?.id} className='even:bg-dark'>
                  <td className='p-2 text-center'>
                    <NavLink to={`/trainers/${trainer?.id}`}>
                      {trainer?.lastName}
                    </NavLink>
                  </td>
                  <td className='p-2 text-center'>
                    <NavLink to={`/trainers/${trainer?.id}`}>
                      {trainer?.firstName}
                    </NavLink>
                  </td>
                  <td className='p-2 text-center'>
                    <NavLink to={`/trainers/${trainer?.id}`}>
                      {trainer?.email}
                    </NavLink>
                  </td>
                  <td className='p-2 text-center'>
                    <NavLink to={`/trainers/${trainer?.id}`}>
                      <img
                        src={trainer?.profileImg}
                        alt='profile'
                        width={50}
                        height={50}
                      />
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
  )
}

export default TrainersTable