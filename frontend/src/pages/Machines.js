import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MachinesTable from '../components/MachinesTable';
import { fetchMachinesThunk } from '../store/machine';
import Loader from '../components/Loader';
import LeftBar from '../components/LeftBar';
import SearchBar from '../components/SearchBar';

const Machines = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyword] = useState([]);
  const dispatch = useDispatch();
  const machines = Object.values(useSelector((state) => state.machines))

  const fetchMachines = async () => {
    try {
      const response = (await fetch('/api/machines')).json();
      const sortedRes = response.sort((machine, nextMachine) => (machine.description < nextMachine.description ? 1 : -1 ))
  
      setFilteredData(sortedRes);
      setData(sortedRes);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const updateKeyword = (keyword) => {
    const filtered = filteredData.filter(machine => {
      return `${machine.description} ${machine.number}`.toLowerCase().includes(keyword.toLowerCase())
    })
    setKeyword(keyword)
    setData(filtered)
  }

  useEffect(() => {
    // setIsLoading(true);
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
          <SearchBar keyword={keyword} onChange={updateKeyword} />
          
        </div>
        <div>
          {isLoading ? <Loader /> : <MachinesTable machines={machines} />}
        </div>
      </div>
    </section>
  );
}

export default Machines
