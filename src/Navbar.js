import React from 'react';

const Navbar = () => {
  return (
    <nav classname="navbar" class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="left-tabs">
        <div className="navbar-title">Navbar</div>
        <div className="tab">Home</div>
        <div className="tab">About</div>
        <div className="tab">Contact</div>
      </div>
      <div className="right-search">
        <input type="text" placeholder="Search" />
        {/* You can add additional search button or icon if needed */}
      </div>
    </nav>
  );
};

export default Navbar;
