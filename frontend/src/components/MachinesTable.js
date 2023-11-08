import React from 'react'
import { Link } from 'react-router-dom';

const MachinesTable = ({ machines }) => {
  console.log('MACHINES === ', machines)
  return (
    <section className='w-full mx-auto'>
      <table className='w-5/6 mx-auto text-lg table-auto'>
        <thead>
          <tr className='bg-dark'>
            <th className='border border-white p-2'>Number</th>
            <th className='border border-white p-2'>Name</th>
            <th className='border border-white p-2'>Type</th>
            <th className='border border-white p-2'>Image</th>
            <th className='border border-white p-2'>Mileage</th>
            <th className='border border-white p-2'>Hours</th>
          </tr>
        </thead>
        <tbody>
          {machines?.map((machine, idx) => (
            <tr key={idx} className='even:bg-dark'>
              <td className='border border-white p-2'>
                <Link
                  to={`/machines/${machine.number}`}
                  className='hover:text-primary'
                >
                  {machine.number}
                </Link>
              </td>
              <td className='border border-white p-2'>
                <Link
                  to={`/machines/${machine.number}`}
                  className='hover:text-primary'
                >
                  {machine.name}
                </Link>
              </td>
              <td className='border border-white p-2'>{machine.type}</td>
              <td className='border border-white p-2'>{machine.image}</td>
              <td className='border border-white p-2'>{machine.mileage}</td>
              <td className='border border-white p-2'>{machine.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default MachinesTable
