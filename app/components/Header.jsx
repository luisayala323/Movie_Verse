"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from "react"

function Header() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  }

  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <Link href="/">
            <div className="navbar-brand d-flex align-items-center">
              <img src="/app/favico" alt="Logo" width="30" height="30" className="d-inline-block align-top me-2" />
              MOVIE VERSE
            </div>
          </Link>
          <form className="d-flex" onSubmit={handleSubmit} role="search">
            <input onChange={e => setSearchText(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Header