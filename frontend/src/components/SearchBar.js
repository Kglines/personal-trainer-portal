import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
console.log('DATA === ', data)
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/machines')
            const data = await res.json().catch((err) => console.log(err));
            setData(data);
        }
        fetchData();
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        let value = e.target.value.toLowerCase();
        let result = [];
        result = data.filter((data) => {
            return data.name.search(value) !== -1;
        });
        setFilteredData(result);
        setSearchInput(value);
    }

    const clearInput = () => {
      setFilteredData([]);
      setSearchInput('');
    };

  return (
    <section>
      <div className='flex justify-center m-4'>
        <input
          type='text'
          placeholder='Search'
          className='border-0 p-2 w-80 text-black'
          value={searchInput}
          onChange={handleSearch}
        />
        {/* <div><i className='fa-solid fa-magnifying-glass pt-4 bg-white text-black border-0 w-8 h-10 mt-0'></i></div> */}
        <div className='search-icon'>
          {filteredData?.length === 0 ? (
            <i className='fa-solid fa-magnifying-glass pt-4 bg-white text-black border-0 w-8 h-10 mt-0'></i>
          ) : (
            <i
              className='cursor-pointer fa-sharp fa-solid fa-xmark pt-4 bg-white text-black border-0 w-8 h-10 mt-0'
              id='clearBtn'
              onClick={clearInput}
            ></i>
          )}
        </div>
      </div>
      {filteredData?.length !== 0 && (
        <div className='data-result w-full min-h-min p-4 max-h-96 bg-offWhite overflow-hidden overflow-y-auto absolute z-50'>
          {filteredData?.map((data) => (
            <NavLink
              key={data?.id}
              className='data-link'
              to={`/songs/${data?.id}`}
            >
              <p className='data-item w-full h-32 flex align-middle text-black ml-4' onClick={clearInput}>
                {data?.title}
              </p>
            </NavLink>
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchBar
