import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMachineThunk } from '../store/machine';
import { useParams } from 'react-router-dom';
import OpenModalButton from '../components/OpenModalButton';
import EditMachineForm from '../forms/Machines/EditMachineForm';
import { useModal } from '../context/Modal';
import DeleteMachine from '../components/Machines/DeleteMachine';
import Problems from '../forms/Problems/Problems';

const Machine = () => {
  const dispatch = useDispatch();
  const { machineId } = useParams();
  const user = useSelector((state) => state.session.user);
  const machine = useSelector((state) => state.machines);

  const { closeModal } = useModal();

  useEffect(() => {
    dispatch(fetchMachineThunk(machineId))
  }, [dispatch, machineId])

  // console.log('machine', machine, machineId)

  return (
    <section className='text-white w-4/5 mx-auto'>
      <div>
        <h1 className='text-2xl text-center mt-12 mb-12'>
          {machine?.manufacturer} {machine?.name}
        </h1>
      </div>
      <div className='flex justify-around'>
        <div className=''>
          <img
            src={machine?.machine_img}
            alt={machine?.name}
            className='rounded-full w-56 h-56'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <p>Number: {machine?.number}</p>
          </div>
          <div>
            <p>Description: {machine?.description}</p>
          </div>
          <div>
            <p>Date New: {machine?.dateNew?.toString().slice(0, 10)}</p>
          </div>
          <div>
            <p>Mileage: {machine?.mileage}</p>
          </div>
          <div>
            <p>Hours: {machine?.hours}</p>
          </div>
          {user?.isAdmin && (
            <div>
              <OpenModalButton
                buttonColor={'secondary'}
                buttonText={'Edit Machine'}
                modalComponent={
                  <EditMachineForm
                    machineId={machine?.id}
                    onClose={closeModal}
                  />
                }
              />
              <OpenModalButton
                buttonColor={'primary'}
                buttonText={'Delete Machine'}
                modalComponent={
                  <DeleteMachine
                    machineId={machine?.id}
                    onClose={closeModal}
                  
                  />
                }
              />
            </div>
          )}
          <OpenModalButton buttonColor={'secondary'} buttonText={'Report A Problem'} modalComponent={<Problems closeModal={closeModal} machine={machine} />} />
        </div>
      </div>
    </section>
  );
}

export default Machine
