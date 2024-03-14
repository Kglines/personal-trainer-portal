import React from 'react'

const ProblemsTable = ({ machine }) => {
    console.log('MACHINE PROBLEM === ', machine?.Problems?.map(problem => problem))
  return (
    <section className='w-full mx-auto mt-10'>
      {/* <div className='mx-auto'>
        <h2 className='text-center'>Maintenance Log</h2>
      </div> */}
      <div>
        <table className='w-5/6 mx-auto text-lg table-auto'>
          <thead>
            <tr className='bg-dark'>
              <th className='border border-dark p-2'>Date</th>
              <th className='border border-dark p-2'>Problem</th>
              <th className='border border-dark p-2'>Repaired</th>
            </tr>
          </thead>
          <tbody>
            {machine?.Problems?.map((problem) => (
              <tr key={problem?.id} className='even:bg-dark'>
                <td className='p-2'>{problem?.createdAt}</td>
                <td className='p-2'>{problem?.description}</td>
                <td className='p-2 text-center'>
                  {problem?.isRepaired === true ? 'Yes' : 'No'}
                </td>
              </tr>
            ))}
            {/* <tr>
                        <td>2021-01-01</td>
                        <td>Broken window</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2021-01-02</td>
                        <td>Leaky faucet</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2021-01-03</td>
                        <td>Broken window</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr> */}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProblemsTable
