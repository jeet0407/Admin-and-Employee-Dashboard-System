import React from 'react';

const Header = ({data}) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser' , '');
    window.location.reload();
  }

  return (
    <div className="flex items-end justify-between">
      <h1>
        Hello <span className="font-semibold text-2xl text-blue-600">{data?.firstName}</span>
      </h1>
      <p className="text-semibold text-white text-2xl">Welcome to our website</p>
      <button onClick =  {logOutUser} className="bg-red-600 text-white p-3 font-semibold border-black rounded">Log Out</button>
    </div>
  );
};

export default Header;

