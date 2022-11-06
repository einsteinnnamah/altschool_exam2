import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
const RepoInfo = () => {
const [newResult, setNewResult] = useState()
    const {name} = useParams()
    useEffect(() => {
        const getRepoInfo = async() => {
            const response = await axios.get('https://api.github.com/users/einsteinnnamah/repos')
            console.log(response.data)
            const newResult = response.data.find(yourData => yourData.name === name)
              setNewResult(newResult)
              console.log(newResult)
          }
          getRepoInfo()
    })
    
  return (
    <div className='text-white'>Repoinfo</div>
  )
}

export default RepoInfo