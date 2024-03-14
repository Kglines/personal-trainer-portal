import React from 'react'
import { Link } from 'react-router-dom';

const MachinesTable = ({ machines }) => {
  return (
    <section className='w-full mx-auto'>
      <table className='w-5/6 mx-auto text-lg table-auto'>
        <thead>
          <tr className='bg-dark'>
            <th className='border border-dark p-2'>Number</th>
            <th className='border border-dark p-2'>Manufacturer</th>
            <th className='border border-dark p-2'>Name</th>
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
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default MachinesTable
