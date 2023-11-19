import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMachineThunk } from '../store/machine';
import { useParams } from 'react-router-dom';

const Machine = () => {
  const dispatch = useDispatch();
  const { machineId } = useParams();
  const machine = useSelector((state) => state.machines);
  useEffect(() => {
    dispatch(fetchMachineThunk(machineId))
  }, [dispatch, machineId])
  console.log('machine', machine, machineId)
  return (
    <section className="text-white w-4/5 mx-auto">
      <div>
        <h1 className='text-2xl text-center mt-12 mb-12'>{machine.manufacturer}{' '}{machine.name}</h1>
      </div>
      <div className='flex justify-around'>
        <div className=''>
            <img src={machine.machine_img} alt={machine.name} className='rounded-full w-56 h-56' />
        </div>
        <div className='flex flex-col gap-4'>
          <div>
              <p>Number: {machine.number}</p>
          </div>
          <div>
              <p>Description: {machine.description}</p>
          </div>
          <div>
              <p>Date New: {machine.dateNew}</p>
          </div>
          <div>
              <p>Mileage: {machine.mileage}</p>
          </div>
          <div>
              <p>Hours: {machine.hours}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Machine
