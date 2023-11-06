import React, { useEffect, useState } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import AssignmentsCard from './AssignmentsCard';
import loading from '../../../assets/Animation - 1699260329532.json'
import Lottie from 'lottie-react';
const AllAssignment = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading state
  
    // Simulate loading for 1.5 seconds (1500 milliseconds)
    setTimeout(() => {
      const type = e.target.type.value.toLowerCase();
      let filteredAssignments = [];
      
      if (type === 'all') {
        filteredAssignments = data; // Show all data
      } else {
        filteredAssignments = data.filter(
          (assignment) => assignment.type.toLowerCase() === type
        );
      }
  
      setFilteredData(filteredAssignments);
      setIsLoading(false); // Hide loading state after filtering
    }, 1500);
  };
  return (
    <div>
      <Navbar />

      <div className='w-[400px] mx-auto mt-5'>
        <form onSubmit={handleSearch} className="flex justify-center mb-4">
          <select
            name="type"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
          >
            <option value="all">All</option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
          <input
            className="bg-[#05214a] p-[13px] rounded-lg text-base font-semibold text-white"
            type="submit"
            value="Search"
          />
        </form>
      </div>

      <div className='grid items-center align-middle gap-2 justify-center'>
        {isLoading ? (
          <Lottie animationData={loading}></Lottie>
        ) : (
          (filteredData.length > 0 ? filteredData : data).map((assignment, index) => (
            <AssignmentsCard key={index} assignment={assignment}></AssignmentsCard>
          ))
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