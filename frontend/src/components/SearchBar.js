import React, { useState } from 'react'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);

    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];
        result = data.filter((data) => {
            return data.name.search(value) !== -1;
        });
        setFilteredData(result);
        setSearchInput(value);
    }

  return (
    <section>
        <div className="flex justify-center m-4">
            <input type="text" placeholder="Search" className="border-0 p-2 w-80 text-black" value={searchInput} onChange={handleSearch} />
            <div><i className='fa-solid fa-magnifying-glass pt-4 bg-white text-black border-0 w-8 h-10 mt-0'></i></div>
        </div>
    </section>
  )
}

export default SearchBar
