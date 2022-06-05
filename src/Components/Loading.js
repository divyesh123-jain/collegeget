import React from 'react';
import '../App.css';    
import { loadingState } from '../Atom/LoadingState';
import {useRecoilValue } from 'recoil';
// import loading from 'giphy.gif';

const Loading = ({showLoading}) => {
    const loading = useRecoilValue(loadingState);
    return (
    <>
        <div style ={{position:"fixed", backgroundColor:"white",zIndex:"100",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",}} className = {loading?"dflex":"hidden"} >
            <img src="giphy.gif" alt="loading" className='h-[150px]' />
        </div>
    </>
  )
}

export default Loading