import React from 'react'

const Table = ({ columns, rows }) => {
  return (
    <section className='text-white'>
      <table>
        <thead>
          <tr className='text-white'>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {rows.map(row => (
            <tr key={row} className='even:bg-dark'>
                {row.map((data, idx) => (
                <td key={idx} className='border p-1 text-center'>{data}</td>
                ))}
            </tr>
            ))  
        }
          {/* <tr className='text-white'>
            {rows.map((row) => (
              <td key={row}>{row}</td>
            ))}
          </tr> */}
        </tbody>
      </table>
    </section>
  );
}

export default Table
