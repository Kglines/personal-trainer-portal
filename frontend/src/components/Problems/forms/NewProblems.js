import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProblemThunk } from '../../../store/problem';
import { fetchMachineThunk } from '../../../store/machine';

const Problems = ({ closeModal, machine }) => {
  // const [machineNum, setMachineNum] = useState(0);
  const [description, setDescription] = useState('');
  const [machineNum, setMachineNum] = useState(0);
  const [errors, setErrors] = useState([]);

  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Machine Number: ', machine?.number);
    console.log('Description: ', description);
    
    let payload = {
      description,
      machineId: machine.id ? machine.id : machineNum,
      userId: user.id,
    }

    dispatch(
      createProblemThunk(payload)
    )
      .then(() => {
        setDescription('');
      })
      .then(() => closeModal())
      .then(() => dispatch(fetchMachineThunk(machine?.id)))
      .catch((res) => {
        setErrors(res.data.errors);
        console.log('ERRORS === ', res);
      });
  };

  console.log('ERRORS WITH PROBLEMS === ', errors)

  return (
    <section className='flex flex-col bg-black text-white w-96'>
      <div className='bg-primary w-full rounded-sm'>
        <h2 className='text-3xl text-center p-2'>Report a Problem</h2>
        <i
          className='fas rounded-full fa-times text-2xl text-right px-2 right-2 top-3 absolute hover:cursor-pointer hover:border hover:border-collapse hover:border-grey hover:bg-grey hover:text-dark'
          onClick={closeModal}
        ></i>
      </div>
      <div className='px-4 py-2 mt-2 border border-dark'>
        <form
          className='flex flex-col text-white gap-4 align-top'
          onSubmit={submitForm}
        >
          <label className='text-white'>
            Machine Number:
            <input
              type='number'
              value={machine?.number ? machine?.number : machineNum}
              //   onChange={(e) => setMachineNum(e.target.value)}
              className='text-white bg-dark px-2 mx-4 w-1/3 text-center'
              disabled
            />
          </label>
          <label className='flex'>
            Description:
            <textarea
              type='text'
              rows={4}
              cols={30}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='bg-dark text-white px-1 mx-2'
            />
          </label>
          <button
            type='submit'
            className='bg-primary text-white p-2 rounded-md w-1/3 mx-auto hover:bg-primary-light disabled:bg-grey'
            disabled={!description}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Problems;
