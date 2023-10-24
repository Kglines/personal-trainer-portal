import React from 'react'

const Table = ({ columns, rows }) => {
  return (
    <section className='text-white w-5/6 mx-auto pt-4'>
      <table className='mx-auto w-full'>
        <thead>
          <tr className='text-white text-center'>
            {columns.map((column) => (
              <th key={column} className='border'>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {rows.map(row => (
            <tr key={row} className='even:bg-dark'>
                {row.map((data, idx) => (
                <td key={idx} className='border p-2 text-center'>{data}</td>
                ))}
            </tr>
            ))  
        }
        </tbody>
      </table>
    </section>
  );
}

export default Table
