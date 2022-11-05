import { data } from 'autoprefixer';
import { useEffect } from 'react'
import { useState } from 'react'
import Pagination from '../Components/Pagination';
import axios from "axios";
const Portfolio = ({totalRepos}) => {
const [userData, setData] = useState([])
const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(1);
const [reposPerPage] = useState(5);

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('https://api.github.com/users/einsteinnnamah/repos')
      const userResult = response.data
      console.log(userResult)
      setData(userResult) 
    }
    getData()
  }, [])

  //Get current posts
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = userData.slice(indexOfFirstRepo, indexOfLastRepo);

  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='text-white flex flex-col justify-center items-center'>
      {
        currentRepos?.map((yourData, i) => [
          <div className='flex flex-col' key={yourData.id}>
              <div className='text-white cursor-pointer bg-red-900 text-center my-5 w-[300px] md:w-[500px] rounded-[20px] p-5'>{yourData.name}</div>
          </div>
        ])
      }
      <div className='flex gap-[10px]git '>
        {currentPage !== 1 && <button onClick={() => setCurrentPage(currentPage - 1)} className='fill'> prev</button>}
        <Pagination reposPerPage={reposPerPage} totalRepos={userData.length} paginate={paginate}  />
        {currentPage !== Math.ceil(totalRepos/reposPerPage) && <button onClick={() => setCurrentPage(currentPage + 1)} className='fill'> next</button>}
      </div>
      
    </div>
  )
}

export default Portfolio 