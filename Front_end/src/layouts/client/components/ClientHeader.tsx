import React from 'react'

const ClientHeader = () => {
  return (
<header className="border-bottom bg-white">
  <div className="container py-2">
    <div className="d-flex align-items-center justify-content-between">

      {/* Logo */}
      <div className="fw-bold fs-5">
        FDORM
      </div>

      {/* Menu */}
      <nav className="d-none d-md-block">
        <ul className="d-flex list-unstyled mb-0 gap-4">
          <li><a href="#" className="text-decoration-none text-dark">Home</a></li>
          <li><a href="#" className="text-decoration-none text-dark">News</a></li>
          <li><a href="#" className="text-decoration-none text-dark">About</a></li>
          <li><a href="#" className="text-decoration-none text-dark">Help</a></li>
        </ul>
      </nav>

      {/* Search + User */}
      <div className="d-flex align-items-center gap-3">

        {/* Search */}
        <form className="d-flex align-items-center border rounded px-2">
          <input 
            className="border-0 outline-0" 
            placeholder="Search..." 
            type="text"
          />
          <button className="btn p-0 ms-1">
            <img src="/images/searchicon.svg" width="18" />
          </button>
        </form>

        {/* User icon */}
        <div>
          <img src="/images/user.svg" width="28" />
        </div>

      </div>
    </div>
  </div>
</header>

  )
}

export default ClientHeader