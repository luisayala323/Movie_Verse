import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div><nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
      <Link className="navbar-brand" href="/">MOVIE VERSE</Link>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav></div>
  )
}

export default Header