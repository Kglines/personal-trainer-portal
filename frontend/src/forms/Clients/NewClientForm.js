import React, { useState } from 'react'

const NewClientForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [errors, setErrors] = useState([]);
  return (
    <section>
      <div>
        <h2>New Client</h2>
        <i
          className='fas fa-times text-2xl text-right p-2 right-0 top-0 absolute hover:cursor-pointer hover:rotate-90 transition ease-in-out'
        //   onClick={}
        ></i>
      </div>
      <div>
        <form>
            <label htmlFor='firstName'>
                First Name:
                <input
                type='text'
                name='firstName'
                id='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label htmlFor='lastName'>
                Last Name:
                <input
                type='text'
                name='lastName'
                id='lastName'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label htmlFor='isActive'>
                Active:
                <input
                type='checkbox'
                name='isActive'
                id='isActive'
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                />
            </label>
        </form>
      </div>
    </section>
  );
}

export default NewClientForm
