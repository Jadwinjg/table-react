import React, { useState } from 'react';
import './index.css';
import { Users } from './user';
import Table from './Table';

function App() {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Change this value as needed

  const search = (data) => {
    const filteredData = data.filter((item) =>
      item.first_name.toLowerCase().includes(query) ||
      item.phonenumber.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query)
    );
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(Users.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='app'>
      <input type='text' placeholder='Search here...' className='search' onChange={e => setQuery(e.target.value)} />
      <Table data={search(Users)} />
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
  );g
}

export default App;