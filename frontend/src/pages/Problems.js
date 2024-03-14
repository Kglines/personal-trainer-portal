import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProblemsThunk, updateProblemThunk } from '../store/problem';

const Problems = () => {
    const dispatch = useDispatch();
    const problems = Object.values(useSelector((state) => state.problems));
    const [repaired, setRepaired] = useState(false);

    useEffect(() => {
        dispatch(getProblemsThunk())
    }, [dispatch])

    console.log('problems === ', problems);

    const repairedProblem = (e) => {
      e.preventDefault();
      setRepaired(prev => !prev)
      console.log('CLICKED!!!', repaired)
      // const payload = {
      //     ...problem,
      //     isRepaired: !problem.isRepaired
      // }
      //   dispatch(updateProblemThunk(payload))
        // setRepaired(true)
    };

    const headers = ['Machine #', 'Description', 'Reported By', 'Date', 'Status', 'Repaired']

  return (
    <section className='w-full mx-auto mt-10 text-offWhite'>
      <div className='mx-auto text-3xl text-center my-12'>
        <h2>Maintenance Log</h2>
      </div>
      <div>
        <table className='w-5/6 mx-auto text-lg table-auto'>
          <thead>
          {headers.map((header, idx) => (
            <th key={idx} className='border border-dark p-2'>{header}</th>
          ))}
          </thead>
          <tbody>
            {problems &&
              problems?.map((problem) => (
                <tr key={problem.id} className='even:bg-dark'>
                  <td className='p-2 text-center'>{problem?.machineId}</td>
                  <td className='p-2 text-center'>{problem?.description}</td>
                  <td className='p-2 text-center'>{problem?.userId}</td>
                  <td className='p-2 text-center'>{problem?.createdAt?.toString().slice(0, 10)}</td>
                  <td className='p-2 text-center'>
                    {problem?.isRepaired === true ? 'Repaired' : 'Notified'}
                  </td>
                  <td className='p-2 text-center'>
                    <input type='checkbox' className='form-checkbox' value={repaired} onChange={repairedProblem} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Problems
