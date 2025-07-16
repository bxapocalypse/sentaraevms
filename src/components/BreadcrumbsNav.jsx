import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <nav aria-label="breadcrumb" className="nav__breadcrumb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const label = decodeURIComponent(value).replaceAll('_', ' ')
          return (
            <li key={to}>
              {isLast ? <span>{label}</span> : <Link to={to}>{label}</Link>}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
