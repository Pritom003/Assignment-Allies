import React, { useEffect, useState } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';

const AllAssignment = () => {
  const [data, setData] = useState([]); // Initialize data as an empty array

  useEffect(() => {
    fetch('http://localhost:5000/assignments')
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>All Assignments {data.length}</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((assignment) => (
            <li key={assignment._id}>
              {/* Render assignment details here */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No assignments available.</p>
      )}
    </div>
  );
};

export default AllAssignment;
