import React, { useEffect } from 'react'
import MachinesTable from '../components/MachinesTable'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMachinesThunk } from '../store/machine';

const AllMachines = () => {
    const dispatch = useDispatch();
    const machines = Object.values(useSelector((state) => state.machines))

    useEffect(() => {
        dispatch(fetchMachinesThunk())
    }, [dispatch])

    console.log('machines === ', machines)
  return (
    <section className='text-offWhite w-4/5 mx-auto text-center pt-4'>
      <div>
        <h1 className='text-white'>Machines</h1>
      </div>
      <div>
        <MachinesTable machines={machines} />
      </div>
    </section>
  );
}

export default AllMachines
