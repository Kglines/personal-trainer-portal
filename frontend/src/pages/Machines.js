import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MachinesTable from '../components/MachinesTable';
import { fetchMachinesThunk } from '../store/machine';

const Machines = () => {
  const dispatch = useDispatch();
  const machines = Object.values(useSelector((state) => state.machines))

  useEffect(() => {
    dispatch(fetchMachinesThunk())
  }, [dispatch]);

  return (
    <section className='text-white w-4/5 mx-auto text-center pt-4 pl-48'>
      <div>
        <h1 className='text-4xl'>Machines</h1>
      </div>
      <div>
        <MachinesTable machines={machines} />
      </div>
    </section>
  );
}

export default Machines
