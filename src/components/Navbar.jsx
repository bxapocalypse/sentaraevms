import { pageLinks } from '../data'
// import { Link } from 'react-router'
import { useState } from 'react'
const Navbar = () => {
  const [openMenus, setOpenMenus] = useState({})

  const toggleMenu = (id) => {
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }
  return (
    <nav
      id="navigation__main"
      className="navbar__navigation--main"
      aria-label="Primary site navigation"
      tabindex="0"
    >
      <div className="navigation__toggle">
        <span className="fa fa-bars"></span>
        <span className="navigation__toggle--text">Menu</span>
      </div>
      {/* <!-- END .navigation__toggle --> */}
      <ul className="navigation__main__list">
        {pageLinks.map((link) => {
          const hasSubLinks = link.subLinks && link.subLinks.length > 0
          return (
            <li key={link.id} className="navigation__main__link">
              <a href={link.href} rel="noreferrer">
                {link.text}
              </a>
              {hasSubLinks && (
                <>
                  <button
                    className="hasSubNav--indicator"
                    aria-label="Sub-navigation"
                    onClick={() => toggleMenu(link.id)}
                    aria-expanded={openMenus[link.id] || false}
                    aria-controls={`submenu-${link.id}`}
                  >
                    <span
                      className="fas fa-caret-down arrow-btn"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <ul
                    id={`submenu-${link.id}`}
                    className={`multilevel-linkurl-0 ${
                      openMenus[link.id] ? 'open' : 'hidden'
                    }`}
                  >
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.id}>
                        <a href={subLink.href} rel="noreferrer">
                          {subLink.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navbar
