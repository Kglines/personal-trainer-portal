import React from 'react'

const SearchBar = ({ keyword, update, placeholder }) => {
  // console.log('on change ==== ', onChange)
  return (
    <section>
      <input
        autoFocus
        key='search-bar'
        value={keyword}
        placeholder={placeholder}
        onChange={(e) => update(e.target.value.trim())}
        className="w-64 h-10 px-2 my-12 text-lg bg-white text-black border-2 focus:outline-none"
      />
    </section>
  );
};

export default SearchBar
