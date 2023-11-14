import React from 'react'

const SearchBar = ({ keyword, onChange }) => {
  console.log('on change ==== ', onChange)
  return (
    <section>
      <input
        key='search-bar'
        value={keyword}
        placeholder={'search machines...'}
        onChange={(e) => onChange(e.target.value)}
        className="w-96 h-10 px-5 pr-16 text-lg bg-white text-black border-2 focus:outline-none"
      />
    </section>
  );
};

export default SearchBar
