import React from 'react';
import {Link} from 'react-router-dom';

const SearchBox = ({search,setSearch}) => {
  return (
    <div>
        <form className="form-inline my-2 my-lg-0">
        <input value = {search} onChange={(e)=>setSearch(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button disabled = {search.length===0?true:false} className='btn btn-outline-success my-2 my-sm-0'>
        <Link to = {`/search/${search}`}>Search</Link>
        </button>
        
      </form>
    </div>
  )
}

export default SearchBox