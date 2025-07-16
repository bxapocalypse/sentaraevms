import { useLocation } from 'react-router-dom'
import { getSidebarLinks } from '../utils/getSidebarLinks'
import Sidebar from './SecondaryPageSidebar'

const Layout = () => {
  const { pathname } = useLocation()
  const sidebarItems = getSidebarLinks(pathname)

  return <Sidebar sidebarItems={sidebarItems} />
}

export default Layout
