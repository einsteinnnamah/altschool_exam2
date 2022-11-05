import React from 'react'

const Pagination = ({reposPerPage, totalRepos, paginate, setCurrentPage, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalRepos/reposPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <nav>
        <div className="text-white flex gap-10">
       
            {pageNumbers.map((number, index) => {
                return <div key={number} className='text-white bg-red-900 px-5 py-2'>
                    <a onClick={() => paginate(number)} href="#" className='text-white active'>
                        {number}
                    </a>
                </div>
            })}
            
        </div>
    </nav>
  )
}

export default Pagination