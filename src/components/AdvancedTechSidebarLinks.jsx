import { advancedTechSidebarLinks } from '../data'
import Quest from './Quest'
import SidebarAddress from './SidebarAddress'
import SidebarEmbeddedMap from './SidebarEmbeddedMap'
import pdfDownloadImg from '../images/Screenshot_2021-04-16_Sentara-EVMS-Pelvic-Floor-Overview_pdf.png'
import pelvicPdf from '../pdf/Pelvic-Floor-Brochure.pdf'

const AdvancedTechSidebarLinks = () => {
  return (
    <section className="container__content--secondary">
      <div className="content__sidebar">
        {/* <!-- Secondary nav with section links --> */}
        <nav className="nav__secondary" aria-label="Section navigation">
          <ul>
            {advancedTechSidebarLinks.map((link) => {
              const { id, href, text } = link
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* <!-- Phone number button --> */}
        <Quest />
        {/* <!-- END .cta__phone --> */}

        {/* <!-- Location address and Google map image and link --> */}
        <div className="map__sidebar" aria-label="Location with map link">
          <SidebarAddress />
          {/* <!-- END .map__sidebar--address --> */}

          <SidebarEmbeddedMap />
          {/* <!-- END .map__sidebar--embed -->	 */}
          <div class="pdf__sidebar">
            <div class="pdf__sidebar--doc">
              <a
                title="Download brochure PDF"
                href={pelvicPdf}
                target="_blank"
                rel="noreferrer"
              >
                {
                  <img
                    src={pdfDownloadImg}
                    alt="Sentara EVMS Comprehensive Pelvic Floor Center overview thumbnail"
                  />
                }
              </a>
            </div>
            {/* <!-- END .pdf__sidebar --> */}
          </div>
        </div>
        {/* <!-- END .map__sidebar --> */}

        {/* <!-- END .content__sidebar --> */}
      </div>
    </section>
  )
}
export default AdvancedTechSidebarLinks
