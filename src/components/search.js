import React from 'react';

function Search() {
const initSearch = {title:''}
const [addSearch, setSearch] = useState(initSearch);

  const handlefilter = (e) => {
    setSearch({[e.target.name]: e.target.value});
    onfilter(e.target.value)
  }
  return (
    <p>
      <input type="text"
      name="title"
      style={{padding: 'spx'}}
      placeholder="hae"
      onChange={handlefilter}>
      </input>
    </p>
  )
}

export default Search