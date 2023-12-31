import React from 'react'

const ClientsTable = () => {
  return (
    <section className='w-full mx-auto'>
      <table className='w-5/6 mx-auto text-lg table-auto'>
        <thead>
          <tr className='bg-dark'>
            <th className='p-2'>First Name</th>
            <th className='p-2'>Last Name</th>
            <th className='p-2'>Active</th>
          </tr>
        </thead>
        <tbody>
          <tr className='even:bg-dark'>
            <td className='p-2'>Keith</td>
            <td className='p-2'>Glines</td>
            <td className='p-2'>
              <input type='checkbox' />
            </td>
          </tr>
          <tr className='even:bg-dark'>
            <td className='p-2'>Keith</td>
            <td className='p-2'>Glines</td>
            <td className='p-2'>
              <input type='checkbox' />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ClientsTable
