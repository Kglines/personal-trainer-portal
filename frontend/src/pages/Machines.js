import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MachinesTable from '../components/Machines/tables/MachinesTable';
import { fetchMachinesThunk } from '../store/machine';
import Loader from '../components/UI/Loader';
import SearchBar from '../components/UI/SearchBar';
import NewMachineForm from '../components/Machines/forms/NewMachineForm';
import { useModal } from '../context/Modal';
import OpenModalButton from '../components/UI/OpenModalButton';
import { getProblemsThunk } from '../store/problem';
import { useNavigate } from 'react-router-dom';

const Machines = () => {
  const { closeModal } = useModal();
  
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyword] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const machines = Object.values(useSelector((state) => state.machines))
  const user = useSelector((state) => state.session.user);

  const fetchMachines = async () => {
    try {
      const response = await (await fetch('/api/machines')).json();
      const sortedRes = response.sort((machine, nextMachine) => (machine.number > nextMachine.number ? 1 : -1 ))
      // console.log('response === ', sortedRes)
  
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
      return `${machine.description} ${machine.number} ${machine.manufacturer}`.trim().toLowerCase().includes(keyword.toLowerCase())
    })
    // console.log('filtered === ', filtered)
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
  const loadMachines = () => {
    console.log('LOAD MACHINES')
    navigate('/machines')
    // setIsLoading(true)
    // fetchMachines()
    // setIsLoading(false)
  }

  const loadProblems = () => {
    console.log('LOAD PROBLEMS')
    navigate('/problems')
    // setIsLoading(true)
    // dispatch(getProblemsThunk())
    // setIsLoading(false)
  }

  console.log('LOAD PROBLEMS === ', loadProblems)

  const machineLinks = ['Maintenance Log', 'Report A Problem', 'allmachines']
const newMachine = '+ Machine'
  return (
    <section className='text-offWhite w-3/5 mx-auto text-center mt-12'>
      {/* <div className='absolute left-0 top-12 bg-dark h-full w-56'>
        <LeftBar button={newMachine} component={<NewMachineForm onClose={closeModal} />} links={machineLinks} />
        <button className='bg-secondary text-offWhite p-2 rounded-md w-44 m-4' onClick={loadMachines}>
          Machines
        </button>
        <button className='bg-secondary text-offWhite p-2 rounded-md w-44 m-4' onClick={loadProblems}>
          Maintenance Log
        </button>
      </div> */}
      <div>
        <div>
          <h1 className='text-4xl p-4'>Machines</h1>
          {user.role === "admin" && (
            <OpenModalButton
              button={newMachine}
              buttonColor={'secondary'}
              buttonText={'New Machine'}
              modalComponent={<NewMachineForm onClose={closeModal} />}
            />
          )}
          <SearchBar keyword={keyword} update={updateKeyword} placeholder='Search Machine Number' />
          {error && <div>{error}</div>}
        </div>
        <div>{isLoading ? <Loader /> : <MachinesTable machines={data} />}</div>
      </div>
    </section>
  );
}

export default Machines
