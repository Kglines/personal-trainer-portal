import React from 'react';
import { Link } from 'react-router-dom';

const ClientsTable = ({ clients }) => {
  // console.log('CLIENTS TABLE ===== ', Object.values(clients) )
  return (
    <section className='md:w-2/3 mx-auto'>
      <table className='w-5/6 mx-auto text-lg table-auto'>
        <thead>
          <tr className='bg-dark'>
            <th className='p-2'>Name</th>
            {/* <th className='p-2'>First Name</th> */}
            <th className='p-2'>Active</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(clients).map((client, idx) => (
            <tr key={idx} className='even:bg-dark'>
              <Link to={`/clients/${client?.id}`}>
                <td className='p-2'>{client?.lastName},</td>
                <td className='p-2'>{client?.firstName}</td>
              </Link>
              <td className='p-2'>
                {client?.isActive ? (
                  <div>
                    {/* <i className='fa-solid fa-check text-green'></i> */}
                  <p className='text-sm text-green border border-green w-1/2 mx-auto'>Active</p>
                  </div>
                  
                ) : (
                  <div>
                    {/* <i className='fa-regular fa-rectangle-xmark text-red'></i> */}
<p className='text-sm text-red border border-red w-1/2 mx-auto'>Inactive</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ClientsTable;
