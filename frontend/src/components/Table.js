import React from 'react'

const Table = ({ headers, data }) => {
  console.log('DATA === ', data)
  return (
    <section className='text-white w-5/6 mx-auto pt-4'>
      <table className='mx-auto w-full'>
        <thead>
          {/* <tr className='text-white text-center'>
            {columns[0].map((column) => (
              <th key={column} className='border'>
                {column}
              </th>
            ))}
          </tr> */}
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className='border border-white'>
                {header}
              </th>
            ))  
            }
          </tr>
        </thead>
        <tbody>
          {data.map((datum, index) => {
            return (
              <tr key={datum.id} className='border border-white'>
                {Object.keys(headers).map((header, index) => {
                  <td key={index} className='border border-white'>
                    <span>{datum[header]}</span>
                  </td>;
                })}
              </tr>
            );
          })}
          {/* <tr>
        {rows.map((row, idx) => (
          <div>
            <td className='border'>{row[0]}</td>
          </div>
        ))}
          </tr> */}
          {/* {rows.map(row => (
            <tr key={row} className='even:bg-dark'>
                {row.map((data, idx) => (
                <td key={idx} className='border p-2 text-center'>{data}</td>
                ))}
            </tr>
            ))  
        } */}
        </tbody>
      </table>
    </section>
  );
}

export default Table
