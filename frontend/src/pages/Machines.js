import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MachinesTable from '../components/MachinesTable';
import { fetchMachinesThunk } from '../store/machine';
import Loader from '../components/Loader';
import LeftBar from '../components/LeftBar';
import SearchBar from '../components/SearchBar';

const Machines = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const machines = Object.values(useSelector((state) => state.machines))

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchMachinesThunk())
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 5000);
    setIsLoading(false);
  }, [dispatch]);

  // const newMachine = {
  //   buttonText: '+ Machine',
  //   modalComponent: <div>Machine Form</div>
  // }
const newMachine = '+ Machine'
  return (
    <section className='text-offWhite w-4/5 mx-auto text-center pt-4 pl-48'>
      <div>
        <LeftBar button={newMachine} />
      </div>
      <div>
        <div>
          <h1 className='text-4xl'>Machines</h1>
          <SearchBar />
        </div>
        <div>
          {isLoading ? <Loader /> : <MachinesTable machines={machines} />}
        </div>
      </div>
    </section>
  );
}

export default Machines
