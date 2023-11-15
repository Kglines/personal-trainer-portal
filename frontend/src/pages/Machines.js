import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MachinesTable from '../components/MachinesTable';
import { fetchMachinesThunk } from '../store/machine';
import Loader from '../components/Loader';
import LeftBar from '../components/LeftBar';
import SearchBar from '../components/SearchBar';
import NewMachineForm from '../forms/NewMachineForm';
import { useModal } from '../context/Modal';

const Machines = () => {
  const { closeModal } = useModal();
  
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyword] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const machines = Object.values(useSelector((state) => state.machines))

  const fetchMachines = async () => {
    try {
      const response = await (await fetch('/api/machines')).json();
      const sortedRes = response.sort((machine, nextMachine) => (machine.number > nextMachine.number ? 1 : -1 ))
      console.log('response === ', sortedRes)
  
      setFilteredData(sortedRes);
      // setMachines(sortedRes);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const updateKeyword = (keyword) => {
    const filtered = filteredData.filter(machine => {
      return `${machine.description} ${machine.number} ${machine.manufacturer}`.toLowerCase().includes(keyword.toLowerCase())
    })
    console.log('filtered === ', filtered)
    setKeyword(keyword)
    // setMachines(filtered)
    setData(filtered)
  }

  useEffect(() => {
    // setIsLoading(true);
    fetchMachines();
    dispatch(fetchMachinesThunk())
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 5000);
    // setIsLoading(false);
  }, [dispatch]);

  // const newMachine = {
  //   buttonText: '+ Machine',
  //   modalComponent: <div>Machine Form</div>
  // }
const newMachine = '+ Machine'
  return (
    <section className='text-offWhite w-4/5 mx-auto text-center pt-4 pl-48'>
      <div>
        <LeftBar button={newMachine} component={<NewMachineForm onClose={closeModal} />} />
      </div>
      <div>
        <div>
          <h1 className='text-4xl'>Machines</h1>
          <SearchBar keyword={keyword} update={updateKeyword} />
          {error && <div>{error}</div>}
        </div>
        {/* <div className="bg-white w-80 mx-auto z-20 absolute right-80">
          {data?.map((machine) => (
            <div key={machine.id} className="bg-white text-black">
              <h2>{machine.description}</h2>
              <h2>{machine.number}</h2>
            </div>
          ))}
        </div> */}
        <div>
          {isLoading ? <Loader /> : <MachinesTable machines={data} />}
        </div>
      </div>
    </section>
  );
}

export default Machines
