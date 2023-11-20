import React from 'react'

const SearchBar = ({ keyword, update }) => {
  // console.log('on change ==== ', onChange)
  return (
    <section>
      <input
        autoFocus
        key='search-bar'
        value={keyword}
        placeholder={'search machine number...'}
        onChange={(e) => update(e.target.value.trim())}
        className="w-96 h-10 px-5 my-12 pr-16 text-lg bg-white text-black border-2 focus:outline-none"
      />
    </section>
  );
};

export default SearchBar
