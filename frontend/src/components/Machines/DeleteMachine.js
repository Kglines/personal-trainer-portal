import React from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { useNavigate } from 'react-router-dom';
import { fetchMachinesThunk, removeMachineThunk } from '../../store/machine';

const DeleteMachine = ({ machineId }) => {
  const dispatch = useDispatch();

  const { closeModal } = useModal();
  const navigate = useNavigate();

  const onDelete = () => {
    dispatch(removeMachineThunk(machineId))
      .then(() => dispatch(fetchMachinesThunk()))
      .then(() => navigate('/machines'))
      .then(() => closeModal())
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className='bg-dark w-full pb-2'>
      <div>
        <h1 className='bg-primary text-white text-center text-2xl p-2'>
          Delete Machine
        </h1>
      </div>
      <div>
        <p className='text-white p-4'>
          Are you sure you want to delete this machine?
        </p>
      </div>
      <div className='flex justify-center gap-2'>
        <button
          className='bg-secondary text-offWhite p-2 rounded-sm hover:bg-secondaryLight'
            onClick={() => onDelete()}
        >
          Delete
        </button>
        <button
          className='bg-primary text-offWhite p-2 rounded-sm hover:bg-primaryLight'
            onClick={() => closeModal()}
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default DeleteMachine;
