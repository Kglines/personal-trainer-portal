import React from 'react'

const ClientsTable = ({ clients }) => {
  // console.log('CLIENTS TABLE ===== ', Object.values(clients) )
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
          {Object.values(clients).map((client, idx) => (
            <tr key={idx} className='even:bg-dark'>
              <td className='p-2'>{client?.firstName}</td>
              <td className='p-2'>{client?.lastName}</td>
              <td className='p-2'>
                {client?.isActive ? (
                  <i className='fa-solid fa-check text-green'></i>
                ) : (
                  <i className='fa-regular fa-rectangle-xmark text-red'></i>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ClientsTable
