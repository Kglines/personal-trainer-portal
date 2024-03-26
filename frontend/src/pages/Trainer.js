import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneUserThunk } from '../store/user';

const Trainer = () => {
  const { trainerId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  console.log('user in Trainer Page === ', user);

  useEffect(() => {
    dispatch(fetchOneUserThunk(parseInt(trainerId)));
  }, [dispatch, trainerId]);

  return (
    <main className='flex flex-col justify-center text-offWhite mx-auto mt-12 text-center'>
      <div>
        <h2>Trainer</h2>
      </div>
      <section>
        <div className='flex justify-between mx-auto'>
          <img
            src={user?.profileImg}
            alt={user?.username}
            className='rounded-full w-64 mx-auto'
          />
          <div className='text-left ml-8'>
            <div className='flex gap-2'>
              <p>{user?.firstName}</p>
              <p>{user?.lastName}</p>
            </div>
            <p>{user?.email}</p>
            <p>{user?.username}</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>Clients({user?.Clients?.length})</h2>

        </div>
        <div>
          {user?.Clients?.map(client => (
            <div key={client?.id} className="flex gap-2">
                <p>{client?.firstName}</p>
                <p>{client?.lastName}</p>
              </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col mx-auto">
        <div>
          <h2 className="flex">Comments(<p className="">{user?.Comments?.length}</p>)</h2>
            
        </div>
        <div>
          {user?.Comments?.map(comment => (
            <div key={comment?.id} className="flex gap-2">
                <p>{comment?.body}</p>
              </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Trainer;
