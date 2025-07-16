import Title from '../components/Title'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useEffect, useRef } from 'react'

const Search = () => {
  const searchInputRef = useRef(null)

  useEffect(() => {
    //Load Google CSE script
    const script = document.createElement('script')
    script.src = 'https://cse.google.com/cse.js?cx=d7e42545d3df74cf0'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = searchInputRef.current.value
    const googleSearch = '/search'
    const url = `${googleSearch}/?q=${encodeURIComponent(query)}`
    window.open(url, '_self')
  }

  return (
    <>
      <Header />
      <div className="search-container">
        <form
          id="form--search"
          onSubmit={handleSubmit}
          role="search"
          className="google-search"
        >
          <input
            autoComplete="off"
            name="q"
            placeholder="Search"
            title="Enter search here"
            type="text"
            id="searchInput"
            ref={searchInputRef}
          />
          <div aria-label="search button" className="search-button">
            <button type="submit">
              <span className="sr-only">Search</span>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>

        {/* Google CSE Search Results */}
        <div
          className="gcse-searchresults-only"
          data-enableAutoComplete="true"
          data-enableImageSearch="false"
          data-disableWebSearch="true"
          data-enableOrderBy="true"
        ></div>

        {/* Pagination */}
        <div id="pagination">
          <button id="prev-btn" disabled>
            Previous
          </button>
          &nbsp;|&nbsp;
          <button id="next-btn">Next</button>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Search
