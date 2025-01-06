import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-50 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* 左側のメニューリンク */}
        <nav className="flex space-x-6 text-gray-600 text-sm">
          <a href="#" className="hover:text-blue-900">Home</a>
          <a href="#" className="hover:text-blue-900">About</a>
          <a href="#" className="hover:text-blue-900">Contact</a>
        </nav>

        {/* 中央のロゴ */}
        <h1 className="text-2xl font-bold text-blue-900">Landing</h1>

        {/* 右側のボタン */}
        <button className="bg-blue-800 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-900">
          Buy Now
        </button>
      </div>
    </header>
  );
};

export default Header;
