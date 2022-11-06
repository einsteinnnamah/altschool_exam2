import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';
const Repoinfo = () => {
const [newResult, setNewResult] = useState()
    const {name} = useParams()
    useEffect(() => {
        getRepoInfo()
    })
        const getRepoInfo = async() => {
          const response = await axios.get('https://api.github.com/users/einsteinnnamah/repos')
          console.log(response.data)
          const newResult = response.data.find((yourData)=> yourData.name === parseInt(name))
            setNewResult(newResult)
            console.log(newResult)
        }
        getRepoInfo()

//     const location = useLocation();
//     let { yourData } = location.state;

//     let newResult = new Date(yourData.name).toDateString({})
//     console.log(newResult)
  return (
    <div className='text-white'>Repoinfo</div>
  )
}

export default Repoinfo