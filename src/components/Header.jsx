import Navbar from './Navbar'
import sentaraLogo from '../images/sentara-logo-2023.svg'
import evmsLogo from '../images/EVMS-logo.svg'
import Breadcrumbs from './BreadcrumbsNav'

const Header = () => {
  return (
    <header>
      <div className="navbar__container">
        <div className="navbar__container--logos">
          <div className="navbar__brand">
            <div className="img--responsive">
              <a
                href="https://www.sentara.com"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                <img
                  src={sentaraLogo}
                  alt="Sentara logo"
                  // style="width : -1px; height : -1px;    "
                />
              </a>
              <a
                href="https://www.evms.edu"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                <img
                  src={evmsLogo}
                  alt="Eastern Virginia Medical School logo"
                  // style="width : -1px; height : -1px;    "
                />
              </a>
            </div>
            {/* <!-- END .img--responsive -->
             */}
          </div>
          {/* <!-- END .navbar__brand" --> */}
        </div>
        {/* <!-- END .navbar__container--logos --> */}
      </div>
      {/* <!-- END .navbar__container --> */}

      <Navbar />

      {/* <!-- END .navbar__navigation--main --> */}

      <Breadcrumbs />
    </header>
  )
}
export default Header
