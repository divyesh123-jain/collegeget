import React from 'react';
import {Link} from 'react-router-dom';

const SearchBox = ({search,setSearch}) => {
  return (
    <div>
        <form className="form-inline my-2 my-lg-0">
        <input value = {search} onChange={(e)=>setSearch(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <Link to = {`/search/${search}`} className="btn btn-outline-success my-2 my-sm-0" disabled = {search.length===0?true:false}>Search</Link>
      </form>
    </div>
  )
}

export default SearchBox