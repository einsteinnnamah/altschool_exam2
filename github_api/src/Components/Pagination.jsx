import React from 'react'

const Pagination = ({reposPerPage, totalRepos}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className="text-white bg-red-600">
            {pageNumbers.map(number => {
                <li key={number} className='text-white bg-red-900'>
                    <a href="#" className='text-white bg-red-600'>
                        {number}
                    </a>
                </li>
            })}
        </ul>
    </nav>
  )
}

export default Pagination