import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-blue-800">Landing</div>
        <nav className="space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-800">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-800">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-800">Contact</a>
        </nav>
        <button className="bg-blue-800 text-white px-4 py-2 rounded-full">Buy Now</button>
      </div>
    </header>
  );
};

export default Header;
