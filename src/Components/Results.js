import React from 'react'
import Card from './Card'

const Results = () => {
    const arr = [1,2,3,4,5,6];
    return (
        <>
        <h2>Showing Results For ...</h2>
    <div className='row'>
        {arr.map((res)=><Card />)}
    </div>
    </>
  )
}

export default Results