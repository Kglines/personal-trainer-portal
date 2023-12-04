import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editMachineThunk, fetchMachineThunk } from '../../store/machine';
import { useNavigate } from 'react-router-dom';
// import { useModal } from '../../context/Modal';


const EditMachineForm = ({ machineId, onClose }) => {
  const dispatch = useDispatch();
  const machine = useSelector(state => state.machines)
  useEffect(() => {
    dispatch(fetchMachineThunk(machineId))
  }, [dispatch, machineId])
    console.log('machine in edit machine === ', machine)
  const navigate = useNavigate();
    // const { onClose } = useModal();

    const [number, setNumber] = useState(machine.number);
    const [manufacturer, setManufacturer] = useState(machine.manufacturer);
    const [type, setType] = useState(machine.type);
    const [name, setName] = useState(machine.name);
    const [description, setDescription] = useState(machine.description);
    const [image, setImage] = useState(machine.machine_img);
    const [dateNew, setDateNew] = useState(machine.dateNew);
    const [mileage, setMileage] = useState(machine.mileage);
    const [hours, setHours] = useState(machine.hours);
    const [errors, setErrors] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            id: machine.id,
            number,
            manufacturer,
            type,
            name,
            description,
            machine_img: image,
            dateNew,
            mileage,
            hours : Number(hours)
        }
        console.log('Machine Payload ==== ', payload)
        dispatch(editMachineThunk(payload))
            .then(() => { 
              dispatch(fetchMachineThunk(machine?.id))
              navigate(`/machines/${machine?.id}`)
            }
              )
            .then(() => onClose())
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            }
        );
    }

    console.log('errors === ', errors)

  return (
    <section className='flex flex-col bg-black text-white w-96'>
      <div className='bg-primary w-full rounded-sm'>
        <h1 className='text-3xl text-center p-2'>Edit Machine</h1>
      </div>
      <div className='px-4 py-2 mt-2 border border-dark'>
        <form onSubmit={onSubmit} className='flex flex-col text-white gap-4 text-right bg-black'>
          <label className='text-white' htmlFor='number'>
            number
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type='number'
              name='name'
              id='name'
              className='text-white bg-dark px-1 mx-2 w-2/3'
              placeholder='424...'
            />
          </label>
          <label className='text-white'>
            manufacturer
            <input
              type='text'
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              className='bg-dark text-white px-1 mx-2 w-2/3'
              placeholder='Precor...'
            />
          </label>
          <label className='text-white'>
            type
            <input
              type='text'
              value={type}
              onChange={(e) => setType(e.target.value)}
              className='bg-dark text-white px-1 mx-2 w-2/3'
              placeholder='Cardio...'
            />
          </label>
          <label>
            name
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='bg-dark text-white px-1 mx-2 w-2/3'
              placeholder='TRM 885...'
            />
          </label>
          <label>
            description
            <input
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='bg-dark text-white px-1 mx-2 w-2/3'
              placeholder='Treadmill...'
            />
          </label>
          <label>
            image
            <input
              type='text'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className='bg-dark text-white px-1 mx-2 w-2/3'
              placeholder='Machine Image...'
            />
          </label>
          <label>
            date new
            <input
              type='date'
              value={dateNew}
              onChange={(e) => setDateNew(e.target.value)}
              className='bg-dark text-white px-1 mx-2 w-2/3'
              placeholder='Installation Date...'
            />
          </label>
          <label>
            mileage
            <input
              type='number'
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              className='bg-dark text-white px-1 mx-2 w-2/3'
              placeholder='250...'
            />
          </label>
          <label>
            hours
            <input
              type='number'
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className='bg-dark text-white px-1 mx-2 w-2/3'
              placeholder='22...'
            />
          </label>
          <button
            type='submit'
            className='bg-secondary hover:bg-secondaryLight h-8'
          >
            Edit
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditMachineForm
