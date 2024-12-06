import React, { useState, useEffect } from "react";

const apiUrl = "https://dummyjson.com/products";

export const Pagination = () => {
  const [products, setProducts] = useState([]); // All products
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 10; // Number of items per page

  async function api() {
    const data = await fetch(apiUrl);
    const jsonData = await data.json();
    setProducts(jsonData.products);
  }

  useEffect(() => {
    api();
  }, []);

  // Calculate the range of items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  console.log("index of last item", indexOfLastItem);

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  console.log("index of first item", indexOfFirstItem);

  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  console.log("current items", currentItems);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  console.log("Total pages : ", totalPages);

  console.log("current Page : ", currentPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>
            {item.id}. {item.title}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};
