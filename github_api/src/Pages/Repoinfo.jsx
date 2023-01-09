import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const RepoInfo = () => {
const [newResult, setNewResult] = useState(null)
    const {name} = useParams()
    useEffect(() => {
        const getRepoInfo = async() => {
            const response = await axios.get('https://api.github.com/users/einsteinnnamah/repos')
            const newResult = response.data.find(yourData => yourData.name === name)
            if (newResult) {
                setNewResult(newResult)
            }
          }
          getRepoInfo()
    })
    
  return (
    <div className='text-white flex flex-col h-screen items-center justify-center'>
    {
        newResult?(
            <div className='cursor-pointer bg-[#5E3EEB]  my-5 w-[300px] md:w-[500px] rounded-[5px] p-5'>
                <p className='text-black font-[600] text-[18px]'>Repo Name</p>
               <div className='flex justify-between'> {newResult.name} <p className='text-black'> Forks: {newResult.forks}</p></div>
               <p className='text-black font-[600] text-[18px] pt-5'>Repo id</p>
               <div className='flex justify-between'> {newResult.id}  <p className='text-black'> Visiblity: {newResult.visibility}</p></div>
                <div className='text-black mt-5'><a href={newResult.html_url} target='_blank'>Click to view Repo</a></div>
            </div>
        ):(
            <div>Loading...</div>
        )
    }

    <Link to='/Repo' className='text-[18px]'>back</Link>
    </div>
  )
}

export default RepoInfo