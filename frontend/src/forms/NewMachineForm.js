import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createMachineThunk } from '../store/machine';

const NewMachineForm = ({ onClose }) => {
    const dispatch = useDispatch();

    const [number, setNumber] = useState(null);
    const [manufacturer, setManufacturer] = useState('');
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [dateNew, setDateNew] = useState('');
    const [mileage, setMileage] = useState(null);
    const [hours, setHours] = useState(null);
    const [errors, setErrors] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            number,
            manufacturer,
            type,
            name,
            description,
            image,
            dateNew,
            mileage,
            hours
        }
        dispatch(createMachineThunk(payload))
            .then(() => onClose())
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            }
        );
    }

  return (
    <section>
        <div>
            <h1>New Machine</h1>
        </div>
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='number'>number
                    <input 
                        value={number} 
                        onChange={e => setNumber(e.target.value)} 
                        type="number"
                        name="name"
                        id="name"
                        className="text-white bg-dark px-1 mx-2"
                    />
                </label>
                <label>manufacturer
                    <input />
                </label>
                <label>type
                    <input />
                </label>
                <label>name
                    <input />
                </label>
                <label>description
                    <input />
                </label>
                <label>image
                    <input />
                </label>
                <label>date new
                    <input />
                </label>
                <label>mileage
                    <input />
                </label>
                <label>hours
                    <input />
                </label>
            </form>
        </div>
    </section>
  )
}

export default NewMachineForm
