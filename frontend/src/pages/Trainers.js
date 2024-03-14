import React, { useEffect } from 'react';
import LeftBar from '../components/UI/LeftBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersThunk } from '../store/user';
import { Link, NavLink } from 'react-router-dom';

const Trainers = () => {
  const dispatch = useDispatch();

  const trainers = Object.values(useSelector((state) => state.users)).filter(
    (user) => user.role === 'admin' || user.role === 'trainer'
  );

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  console.log('trainers === ', trainers);
  return (
    <section className='text-offWhite w-4/5 mx-auto text-center pt-4 pl-48'>
      {/* <div>
        <LeftBar />
      </div> */}
      <div>
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
      </div>
      {/* <div>
        <div>
          <h1>Trainers</h1>
        </div>
        <div>
          <table>Trainer Table</table>
        </div>
      </div> */}
    </section>
  );
};

export default Trainers;
