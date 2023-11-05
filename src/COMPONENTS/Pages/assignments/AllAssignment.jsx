import React, { useEffect, useState } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import AssignmentsCard from './AssignmentsCard';

const AllAssignment = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/assignmentcount')
      .then((res) => res.json())
      .then((fetchedCount) => {
        setCount(fetchedCount);
      })
      .catch((error) => {
        console.error('Error fetching count data:', error);
      });
  }, []);

  const totalAssignment = count ? count.count : 0;
  const totalPages = Math.ceil(totalAssignment / itemsPerPage);
  const pages = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch(`http://localhost:5000/assignments?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error('Error fetching all assignment data:', error);
      });
  }, [currentPage, itemsPerPage]);

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0); 
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='grid items-center align-middle gap-2 justify-center'>
      
        {data.length > 0 ? (
          data.map((assignment, index) => (
            <AssignmentsCard key={index} assignment={assignment} />
          ))
        ) : (
          <p>No assignments submitted yet</p>
        )}
        <div className='flex justify-center align-middle items-center gap-2'>
          <p>{currentPage + 1}</p>
          <button onClick={handlePrevPage}>Prev</button>
          {pages.map((pageNum, i) => (
            <div className="join" key={i}>
              <button
                onClick={() => setCurrentPage(pageNum)}
                className={currentPage === pageNum ? 'bg-green-400' : ''}
              >
                {pageNum + 1}
              </button>
            </div>
          ))}
          <button onClick={handleNextPage}>Next</button>
          <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllAssignment;