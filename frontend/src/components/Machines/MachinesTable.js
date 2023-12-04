import React from 'react'
import { Link } from 'react-router-dom';

const MachinesTable = ({ machines }) => {
  // console.log('MACHINES === ', machines)
  return (
    <section className='w-full mx-auto'>
      <table className='w-5/6 mx-auto text-lg table-auto'>
        <thead>
          <tr className='bg-dark'>
            <th className='border border-dark p-2'>Number</th>
            <th className='border border-dark p-2'>Description</th>
            <th className='border border-dark p-2'>Manufacturer</th>
            <th className='border border-dark p-2'>Name</th>
            <th className='border border-dark p-2'>Type</th>
            <th className='border border-dark p-2'>Image</th>
            <th className='border border-dark p-2'>Mileage</th>
            <th className='border border-dark p-2'>Hours</th>
          </tr>
        </thead>
        <tbody>
          {machines?.map((machine, idx) => (
            <tr key={idx} className='even:bg-dark'>
              <td className='p-2'>
                <Link
                  to={`/machines/${machine?.id}`}
                  className='hover:text-primary'
                >
                  {machine?.number}
                </Link>
              </td>
              <td className='p-2'>
                <Link
                  to={`/machines/${machine?.id}`}
                  className='hover:text-primary'
                >
                  {machine?.description}
                </Link>
              </td>
              <td className='p-2'>
                <Link
                  to={`/machines/${machine?.id}`}
                  className='hover:text-primary'
                >
                  {machine?.manufacturer}
                </Link>
              </td>
              <td className='p-2'>
                <Link
                  to={`/machines/${machine?.id}`}
                  className='hover:text-primary'
                >
                  {machine?.name}
                </Link>
              </td>
              <td className='p-2'>{machine?.type}</td>
              {/* <td className='border border-white p-2'>{machine.image}</td> */}
              <td className='p-2'>
                <img src={machine?.machine_img} alt={machine?.name} className='w-16 h-12 mx-auto' />
              </td>
              <td className='p-2'>{machine?.mileage}</td>
              <td className='p-2'>{machine?.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default MachinesTable
