import React from 'react'
import { useState } from 'react';
const FilterLoc = ({ data }) => {
     
  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (e) => {
    const text = e.target.value;
    setFilterText(text);

    // Filter the data based on the entered text
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredData(filtered);
  };
  return (
    <>
      <div>
        <label htmlFor="locationFilter">Filter by Location:</label>
        <input
          type="text"
          id="locationFilter"
          value={filterText}
          onChange={handleFilterChange}
          placeholder="Enter location..."
        />

        <ul>
          {/* Display the filtered data */}
          {Array.isArray(filteredData) && filteredData.length > 0 ? (
            filteredData.map((item) => <li key={item._id}>{item.name}</li>)
          ) : (
            <h1>Loading</h1>
          )}
        </ul>
      </div>
    </>
  );
}

export default FilterLoc



 
