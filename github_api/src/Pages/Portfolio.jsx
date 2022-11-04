import { data } from 'autoprefixer';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";
const Portfolio = () => {
const [userData, setData] = useState(null)

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('https://api.github.com/users/einsteinnnamah/repos')
      const userResult = response.data
      console.log(userResult)
      setData(userResult) 
    }
    getData() 
  }, [])

  return (
    <div className='text-white flex flex-col justify-center items-center'>

      {
        userData?.map((yourData, i) => [
          <div className='flex flex-col' key={yourData.id}>
              <div className='text-white cursor-pointer bg-red-900 text-center my-5 w-[300px] md:w-[500px] rounded-[20px] p-5'>{yourData.name}</div>
          </div>
        ])
      }
    </div>
  )
}

export default Portfolio 