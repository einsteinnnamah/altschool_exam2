import { data } from 'autoprefixer';
import { useEffect } from 'react'
import { useState } from 'react'
import Pagination from '../Components/Pagination';
import {Link} from 'react-router-dom'
import axios from "axios";
const Repo = ({totalRepos}) => {
const [userData, setData] = useState([])
// const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(1);
const [reposPerPage] = useState(4);

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
        currentRepos?.map(({name,id}) => [
          <div className='flex' key={id}>
            <Link to={`repo-info/${name}`}  >
              
              <div className='text-white cursor-pointer bg-[#5E3EEB]   my-5 w-[300px] md:w-[500px] rounded-[5px] p-5'>
              <p className='text-black font-[600] text-[18px]'>Repo Name</p>
              <div className=''>
                {name}
              </div>
              </div>
            </Link>
          </div>
        ])
      }
      <div className='flex gap-[10px] my-5  '>
        {currentPage !== 1 && <button onClick={() => setCurrentPage(currentPage - 1)} className='bg-gray-500 text-white px-2 md:px-5 rounded-[5px] hover:bg-[#5E3EEB] '> prev</button>}
        <Pagination reposPerPage={reposPerPage} totalRepos={userData.length} paginate={paginate}  />
        {currentPage !== Math.ceil(totalRepos/reposPerPage) && <button onClick={() => setCurrentPage(currentPage + 1)} className='bg-gray-500 text-white px-2 md:px-5 rounded-[5px] hover:bg-[#5E3EEB]'> next</button>}
      </div>
      
    </div>
  )
}

export default Repo 