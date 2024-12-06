import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-200 shadow-md p-4">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">E-Commerce</div>

        {/* Navigation */}
        <div className="flex space-x-6 bg-white shadow-lg border rounded-lg px-4 py-2">
          <a
            href="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="/category"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Category
          </a>
          <a
            href="/cart"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Cart
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
