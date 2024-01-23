import React from 'react';
import { Link } from 'react-router-dom';

const ClientsTable = ({ clients }) => {
  // console.log('CLIENTS TABLE ===== ', Object.values(clients) )
  return (
    <section className='w-2/3 mx-auto'>
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
};

export default ClientsTable;
